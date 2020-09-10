package abstracto.domain;

public abstract class FiguraGeometrica {

    protected String tipoFigura;

    protected FiguraGeometrica(String tipoFigura) {

        this.tipoFigura = tipoFigura;

    }

    public abstract void dibujar(); // No tienen comportamiento. Lo hacen las subclases. No se puede usar super.

    public String getTipoFigura() {

        return this.tipoFigura;

    }

    public void setTipoFigura(String tipoFigura) {

        this.tipoFigura = tipoFigura;

    }

    @Override
    public String toString() {
        return "FiguraGeometrica{" +
                "tipoFigura='" + tipoFigura + '\'' +
                '}';
    }
} // No se pueden instanciar. Funcionan como template de clases.
