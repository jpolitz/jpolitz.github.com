---
layout: blog
title: "Getting a User's Email in Google Sheets (Respectfully)"
---

For various reasons related to course infrastructure, I recently wanted to get
the *email address of a viewing user* in a sheet. I came up with a solution I
like that I didn't find anywhere else online as a simple snippet. Now, if
Google Apps Script allowed this unconditionally, it would clearly be a
ridiculous privacy and security concern for shared sheets links. So if you try
to do it directly using
[https://developers.google.com/apps-script/reference/base/user#getEmail()](getEmail())
in a custom function, you get an understandable error that the script doesn't
have permission, or in other tests I tried it returned an empty string.

At first, I thought the only way to get the required permission was to write a
Google Sheets Add-on, but that's way too heavyweight a UX for what I had in
mind. However, you can *also* trigger the permissions dialog from a
[https://developers.google.com/apps-script/guides/menus](custom menu) which is
hinted at
[https://developers.google.com/apps-script/guides/sheets/functions#using_apps_script_services](here).
I assume this is because triggering a permission dialog on a formula running
would suck as a UX, and some direct user action like clicking a menu helps both
technically and to avoid clickthrough behavior from users. Since scripts also
allow us to store data that is user-scoped with
[https://developers.google.com/apps-script/guides/properties](properties), we
can put all this together to get a nice solution:

```
function EMAIL() {
  return PropertiesService.getUserProperties().getProperty('userEmail');
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Share my email')
  .addItem('Share my email', 'menuItem1')
  .addToUi();
}

function menuItem1() {
  var email = Session.getEffectiveUser().getEmail();
  PropertiesService.getUserProperties().setProperty('userEmail', email);
  SpreadsheetApp.getUi().alert(email);
}
```

At first when the sheet loads, a cell that uses `EMAIL` will have an error in
it with the permission problem. But if the user clicks the new custom menu item
they will be prompted to allow the email permission to be shared, and then the
`EMAIL` call will start returning the expected result.

![/img/custom-menu.png](A custom menu item)

See it in action here:

[https://docs.google.com/spreadsheets/d/1aFO5-5M3QNwQ7BMBTlGRTPbTFaT_oaYDRNVElzBZsRo/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1aFO5-5M3QNwQ7BMBTlGRTPbTFaT_oaYDRNVElzBZsRo/edit?usp=sharing)

If you want to try yourself, make a new blank Google Sheet and put the code
above in Tools -> Script Editor.

