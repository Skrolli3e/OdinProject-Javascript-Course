function Book(title, author, page , read){
    this.title = title;
    this.author = author;
    this.pages = page;
    this.read = read;
    this.Read = function() {
        this.read = !this.read;
    }
    this.info = function(){
        baseString = this.title + ' by ' + this.author + ' , '  + this.pages + ' pages, '
        if (this.read){
            baseString += 'read'
        } else {
            baseString += 'not read yet'
        }
        return baseString 
    }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);

console.log(book1.info());
