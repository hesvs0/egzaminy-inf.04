using System;

public class Osoba
{
    private static int liczbaInstancji = 0; 

    private int id;
    private string imie;

    public Osoba()
    {
        id = 0;
        imie = "";
        liczbaInstancji++;
    }

    public Osoba(int id, string imie)
    {
        this.id = id;
        this.imie = imie;
        liczbaInstancji++;
    }

    public Osoba(Osoba other)
    {
        id = other.id;
        imie = other.imie;
        liczbaInstancji++;
    }

    public static int LiczbaInstancji
    {
        get { return liczbaInstancji; }
    }

    public void WypiszImie(string argument)
    {
        if (!string.IsNullOrEmpty(imie))
        {
            Console.WriteLine($"Cześć {argument}, mam na imię {imie}");
        }
        else
        {
            Console.WriteLine("Brak danych");
        }
    }

}

class Program
{
    static void Main()
    {
        Osoba osoba1 = new Osoba(1, "Jan");
        Osoba osoba2 = new Osoba();
        Osoba osoba3 = new Osoba(osoba1);

        osoba1.WypiszImie("Anna");
        osoba2.WypiszImie("Mateusz");
        osoba3.WypiszImie("Karolina");

        Console.WriteLine($"Liczba instancji klasy Osoba: {Osoba.LiczbaInstancji}");

         Console.ReadLine();
    }
}


