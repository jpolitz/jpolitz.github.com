---
layout: blog
title: "Getting a User's Email in Google Sheets (Respectfully)"
---

For various reasons related to course infrastructure, I recently wanted to get
the *email address of a viewing user* in a sheet. I came up with a solution I
like that I didn't find anywhere else online as a simple snippet.

If Google Apps Script allowed getting a viewing user's email unconditionally,
it would clearly be a ridiculous privacy and security concern for shared
sheets. As a result, if you try to do it directly using
[getEmail()](https://developers.google.com/apps-script/reference/base/user#getEmail())
in a custom function, you get an understandable error that the script doesn't
have permission, or in other tests I tried it returned an empty string.

At first, I thought the only way to get the required permission was to write a
Google Sheets Add-on, but that's way too heavyweight a UX for what I had in
mind. However, you can *also* trigger the permissions dialog from a
[custom menu](https://developers.google.com/apps-script/guides/menus) which is
[hinted at
here](https://developers.google.com/apps-script/guides/sheets/functions#using_apps_script_services).
I assume this is because triggering a permission dialog on a formula running
would suck as a UX, and some direct user action like clicking a menu helps both
technically and to avoid clickthrough behavior from users. Since scripts also
allow us to store data that is user-scoped with
[properties](https://developers.google.com/apps-script/guides/properties), we
can put all this together to get a nice solution:

```
function EMAIL() {
  return PropertiesService.getUserProperties().getProperty('userEmail');
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Share my email')
  .addItem('Share my email', 'getAndStoreEmail')
  .addToUi();
}

function getAndStoreEmail() {
  var email = Session.getEffectiveUser().getEmail();
  PropertiesService.getUserProperties().setProperty('userEmail', email);
}
```

At first when the sheet loads, a cell that uses `EMAIL` will have an error in
it with the permission problem. But if the user clicks the new custom menu item
they will be prompted to allow the email permission to be shared, and then the
`EMAIL` call will start returning the expected result.

<img alt="A custom menu item" src="/img/custom-menu.png" style="width: 100%"/>

See it in action here:

[https://docs.google.com/spreadsheets/d/1aFO5-5M3QNwQ7BMBTlGRTPbTFaT_oaYDRNVElzBZsRo/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1aFO5-5M3QNwQ7BMBTlGRTPbTFaT_oaYDRNVElzBZsRo/edit?usp=sharing)

If you want to try yourself, make a new blank Google Sheet and put the code
above in Tools -> Script Editor.

