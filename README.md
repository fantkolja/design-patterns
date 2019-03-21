# Design Principles
- encapsulate what varies;
- classes should be open for extensions, but closed for modifications;
- progrmm to interface not to implementation;
- favor composition over inheritance;
- strive for loosely coupled design between objects that interact;
- depend upon abstractions, don't depend upon concrete classes (Dependency Inversion Principle);

# Decorator
Decorators attach additional responsibilities to the objects dinamically. Decorators provide flexible alternatives to subclassing for extending functionality.

# Factory Method
Creates an interface for creating an object but lets the subclasses deside which class to instantiate. Factory Method lets a class defer instantiation to the subclasses

# Abstract Factory
Provides interface for creating families of related or dependant objects without specifying their concrete classes.

# Command
Encapsulates request as an object, thereby letting you parametrize other objects with different requests, queue or log requests, and support undoable operations.

# Adapter
Converts the interface of a class into another interface the client expects. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.