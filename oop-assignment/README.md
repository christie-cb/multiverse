# OOP Assignment
## UML for Core Assignment

On first read of the assignment this was the diagram I came up with. On second thought, this seems like a bad way to structure the classes. For example, User.createPost would violate the single responsibility principle.

![UML](/../images/oop-assignment/UML.png?raw=true)

In the end, the result looked more like the diagram below. ForumPage containts a Post array but doesn't place any restrictions on what properties the post needs to have. Still a bit unsure about this so any feedback would be hugely appreciated! Thank you! 

### Improvements to make
- Post, Poll and Comment to inherit from a generic class with only text, date and author.
- Putting more thought into Poll and Options.

![UML](/../images/oop-assignment/UML_updated.png?raw=true)
