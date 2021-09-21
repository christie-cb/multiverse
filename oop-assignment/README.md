# OOP Assignment
## UML for Core Assignment

On first read of the assignment this was the diagram I came up with. On second thought, this seems like a bad way to structure the classes. For example, User.createPost would violate the single responsibility principle.

![UML](/../images/oop-assignment/UML.png?raw=true)

After some more thought the end result looked more like this. ForumPage containts a Post array but doesn't place any restrictions on what properties the post needs to have.

![UML](/../images/oop-assignment/UML_updated.png?raw=true)
