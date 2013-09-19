/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  April 21st 2009 10:05:15 AM PDT                              */
/*      Machine:  10.16.140.110                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/language.js h:4hiewybl                                    */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/language.js                                               */


function intl_locale_selector_dialog(uri){var dialog=new Dialog().setContentWidth(550).setStackable(true).setShowLoading(true);new AsyncRequest().setURI('/ajax/intl/language_dialog.php').setData({'uri':uri}).setReadOnly(true).setHandler(function(asyncResponse){var payload=asyncResponse.getPayload();dialog.setTitle(payload.dialog_title);dialog.setBody(payload.dialog_body);dialog.setButtons([Dialog.OK]);dialog.show();}).send();return false;}

if (window.Bootloader) { Bootloader.done(["js\/language.js"]); }