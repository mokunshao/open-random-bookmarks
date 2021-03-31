chrome.browserAction.onClicked.addListener(function () {
  chrome.bookmarks.getTree(function (results) {
    var bookmarks = [];
    flatten(bookmarks, results[0]);
    var selected = getRandomIndex(bookmarks.length);
    open(bookmarks[selected].url);
  });
});

function flatten(result, item) {
  var children = item.children;
  if (children) {
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      flatten(result, child);
    }
  } else {
    result.push(item);
  }
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * Math.floor(length));
}
