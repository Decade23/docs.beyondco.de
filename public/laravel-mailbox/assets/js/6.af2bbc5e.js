(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,t,i){"use strict";i.r(t);var a=i(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Once you have configured your mailboxes, you need to connect your email provider with this package.\nThese are the supported drivers.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("To use Laravel Mailbox with your Mailgun account, you first need to set the "),i("code",[e._v("MAILBOX_MAILGUN_KEY")]),e._v(" environment variable to your "),i("a",{attrs:{href:"https://help.mailgun.com/hc/en-us/articles/203380100-Where-can-I-find-my-API-key-and-SMTP-credentials-",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mailgun API key"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("See "),i("a",{attrs:{href:"https://documentation.mailgun.com/en/latest/user_manual.html#receiving-forwarding-and-storing-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Receiving, Forwarding and Storing Messages"'),i("OutboundLink")],1),e._v(" in the Mailgun documentation.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("See "),i("a",{attrs:{href:"https://sendgrid.com/docs/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"SendGrid Inbound Parse"'),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),i("p",[e._v('When working locally, you might not want to use real incoming emails while testing your application. Out of the box, this package supports Laravel\'s "log" mail driver for incoming emails.')]),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"available-drivers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-drivers","aria-hidden":"true"}},[this._v("#")]),this._v(" Available drivers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can configure your driver by specifying the "),t("code",[this._v("MAILBOX_DRIVER")]),this._v(" environment variable in your "),t("code",[this._v(".env")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mailgun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mailgun","aria-hidden":"true"}},[this._v("#")]),this._v(" Mailgun")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can then set your "),t("code",[this._v("MAILBOX_DRIVER")]),this._v(' to "mailgun".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next you will need to configure Mailgun, to send incoming emails to your application at "),t("code",[this._v("/laravel-mailbox/mailgun/mime")]),this._v(". So if your application is at "),t("code",[this._v("https://awesome-laravel.com")]),this._v(", it would be "),t("code",[this._v("https://awesome-laravel.com/laravel-mailbox/mailgun/mime")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sendgrid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendgrid","aria-hidden":"true"}},[this._v("#")]),this._v(" SendGrid")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("To use SendGrid with Laravel Mailbox, you will need to generate a random password and store it as the "),t("code",[this._v("MAILBOX_HTTP_PASSWORD")]),this._v(' environment variable. The default username is "laravel-mailbox", but you can change it using the '),t("code",[this._v("MAILBOX_HTTP_USERNAME")]),this._v(" environment variable.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can then set your "),t("code",[this._v("MAILBOX_DRIVER")]),this._v(' to "sendgrid".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next you will need to configure SendGrid Inbound parse, to send incoming emails to your application at "),t("code",[this._v("/laravel-mailbox/sendgrid")]),this._v(". Use the username and the password that you generated for the URL.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If your application is at "),t("code",[this._v("https://awesome-laravel.com")]),this._v(", it would be "),t("code",[this._v("https://laravel-mailbox:YOUR-GENERATED-PASSWORD@awesome-laravel.com/laravel-mailbox/sendgrid")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v('Be sure the check the box labeled "Post the raw, full MIME message." when setting up SendGrid.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"local-development-log-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-development-log-driver","aria-hidden":"true"}},[this._v("#")]),this._v(" Local development / log driver")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("To test incoming emails, set both your "),i("code",[e._v("MAIL_DRIVER")]),e._v(" and your "),i("code",[e._v("MAILBOX_DRIVER")]),e._v("  in your "),i("code",[e._v(".env")]),e._v(' file to "log".\nNow every time you send an email in your application, this email will appear in your '),i("code",[e._v("laravel.log")]),e._v(" file and will try to call one of your configured Mailboxes.")])}],!1,null,null,null);r.options.__file="drivers.md";t.default=r.exports}}]);