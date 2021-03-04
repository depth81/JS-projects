A project where the benefit of working with the concepts of OOP is noticed, is a Canvas in which you can visualize different geometric figures (rectangle, circle, triangle, etc).

A non-object-oriented approach would be to create a Canvas class with member methods like: drawRectangle, drawCircle, etc. But this solution is not suitable because it does not use the features of object-oriented programming and is difficult because the length of the code is considerable.

Using OOP, the proposal is as follows:

Create a Canvas class. It must have a collection of shapes (aggregation with the Shape class). You should also have methods like addShape to add new figures or deleteShape to delete already added figures. It should also have a drawAll function that draws all the added figures. Shape is a base class that has a drawing method. Each shape has a size (composition) and a position. Position is a class with attributes for the coordinates (x, y). The size has a width and height attribute. Each specific shape (Rectangle, Triangle, Circle) are sub-classes of shape so that each one has a position, a size and likewise, they all implement the drawing function. With this solution, it is quite easy to extend the program with new ways (only implement new child classes) to change the representation of the position to another coordinate system.

