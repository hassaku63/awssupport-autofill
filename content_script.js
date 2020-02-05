// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var template_string = `AWSサポート ご担当者様

xxxについておしえてください。

以上、よろしくお願いいたします。

-----------------------------------------------
会社名: 株式会社ほげ
担当者名: foobar
エンドユーザー様名: 株式会社ばず
チケット番号: 12345678910111213
-----------------------------------------------
`;

function injectSignatureToTextarea (message) {
    var field = document.querySelector("textarea[id^=awsui-textarea-]");
    // console.log('element found.');
    // console.log(field.value);
    if (field !== null) {
        if (field.value == ""){
            field.value = template_string;
        }
        // $("div").off("click", "textarea[id^=awsui-textarea-]", injectSignatureToTextarea);
    }
}

$(function() {
  // $("textarea[id^=awsui-textarea-]").click(function() {
  // $("div").on("click", "textarea[id^=awsui-textarea-]",function() {
  //   console.log(window.location);

  //   var field = document.querySelector("textarea[id^=awsui-textarea-]");
  //   console.log(field.value);

  //   if (field !== null) {
  //     field.value = template_string;
      
  //   }
  // });
  $("div").on("click", "textarea[id^=awsui-textarea-]", injectSignatureToTextarea);
  console.log("listener ready");
});
