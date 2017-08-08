function construct(Class) {
    var classObject =  Class.bind.apply(Class, arguments);
    return new classObject;
}