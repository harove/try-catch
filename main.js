try {
    myFunc()
} catch (e) {
    switch (true) {
        case e instanceof TypeError:
            console.info(e)
            break;
        case e instanceof RangeError:
            console.info(e)
            break;
        case e instanceof ReferenceError:
            console.info("error de referencia")
        default:
            console.log("olvidamos el break")
            break;
    }
}