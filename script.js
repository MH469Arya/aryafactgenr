function addNote() {
    var title = document.getElementById("noteTitle").value;
    var content = document.getElementById("noteContent").value;
  
    // Basic validation
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content.");
      return;
    }
  
    // Create a new note element
    var noteElement = document.createElement("div");
    noteElement.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p><button>Like</button>";
  
    // Append the new note to the notes container
    document.getElementById("notesContainer").appendChild(noteElement);
  
    // Clear the input fields
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
  }
  
  // You'll need to implement like functionality and data persistence.
  