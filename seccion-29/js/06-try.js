try {
    throw new Error('Algo salió mal.');
} catch {
    console.log('Hubo un error bastante grave.');
} /* Se puede evitar poner el constructor. Ya no se recibe la respuesta de las librerías directamente; se puede
personalizar el mensaje. */