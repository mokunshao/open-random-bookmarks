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
  for (var i = 0; i < children.length; i++) {
    var current = children[i];
    if (current.children) {
      flatten(result, current);
    } else if (current.url) {
      result.push(current);
    }
  }
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * Math.floor(length));
}
