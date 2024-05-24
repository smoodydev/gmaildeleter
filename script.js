// Function to permanently delete emails from a specific sender
function deleteEmailsFromSender() {
  var sender = "ahole-@stopstalker.org"; // Replace email with the person

  var threads = GmailApp.getTrashThreads();

  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    messages.forEach(function(message) {

      if (message.getFrom().includes(sender)) {
        var messageId = message.getId();
        Gmail.Users.Messages.remove("me", messageId);
      }
    });
  });
}
