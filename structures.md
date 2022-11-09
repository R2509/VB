# **Visual Basic Stuff**

# 1. Structures

## **1.1 Creating Structures**

consider the following code:

```vb
Structure Country
	Dim name As String
	Dim population As Integer
End Structure
```

In the above code, we have made a structure called `Country` which has a String attribute, `name` and an Integer attribute, `population`.

## **1.2 Declaring Variables with Structures**

Using the same example structure, `Country`, we can declare variables.

To declare a variable as an instance of your structure, do what you would normally do but use your structure name after "`As`".

```vb
Dim my_country As Country
```

This is pretty intuitive: it creates a variable and makes it an *instance* of the `Country` class.

With arrays, it's pretty much the same. The only difference is that you need brackets with the array length.

###### *`Arrays with a custom structure`*
```vb
Dim some_countries(199) as Country
```

To properly understand this, here's a more familiar example:

###### *`Familiar array declaration`*
```vb
Dim names(26) as String
```
With this, every item in names is initialised as an instance of `String`. i.e. every item in the array is a single string. So there are 27 individual strings in this array.

with the first example, things are exactly the same. each item in `some_countries` is created as a `Country`. Remember, the structure only counts as ***one*** country.

&nbsp;

&nbsp;

more to come...
