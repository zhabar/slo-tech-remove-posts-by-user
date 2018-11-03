// ==UserScript==
// @name     slo-tech Remove Posts By User
// @version  1
// @grant    none
// @include  https://slo-tech.com/forum/*
// @include  https://slo-tech.com/novice/*
// @version  1.0
// ==/UserScript==

// Block all users specified below by their nick names
blockedUsers = ['username1', 'username2'];

for (let i=blockedUsers.length-1; i>=0; i--){
  var offender = document.evaluate("//div[contains(@class, 'post')]//a[starts-with(@href, '/profili') and text() = '" + blockedUsers[i] + "']/ancestor::div[contains(@class, 'post')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (let i=offender.snapshotLength-1; i>=0; i--){
    offender.snapshotItem(i).remove();
  }
}