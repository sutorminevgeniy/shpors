System.out.print("Hello world! ");
System.out.println("Note for Java");

// Преременные
  byte a = 5; // -128 127
  short b = -100; // -32768 32767
  int c;
  c = 1000000;
  long d = 1122334455;

  float float1 = 150.32f;
  double double1 = 133.155;

  boolean boolean1 = true;

  char char1 = 'w';

  String str = "Hello!";

  System.out.println();
  System.out.println("char char1: " + char1);

// Массивы
  String[] names;
  names = new String[3];

  String[] arrString = new String[3];
  arrString[0] = "Vasya";
  arrString[1] = "Petya";
  arrString[2] = "Vanya";

  System.out.println(arrString[0]);

  int[] arrInt1 = new int[10];
  int[] arrInt2 = {15, 10, 100,9, 44};

  for (int i = 0; i < arrInt2.length; i++) {
    System.out.println(arrInt2[i]);
  }

// Строки
  String s = "Hello world!";
  String s2 = "hello";

  System.out.println(s.length());
  System.out.println(s.equals("Hello world!")); // s == "Hello world!"
  System.out.println(s.equals("Hello!")); // s == "Hello!"
  System.out.println(s.equals(s2));
  System.out.println(s.equalsIgnoreCase(s2)); // без учета регистра

  s = "TeXt";

  System.out.println(s.toLowerCase());
  System.out.println(s.toUpperCase());
  System.out.println(s.charAt(1));
  System.out.println(s.indexOf("Xt"));
  System.out.println(s.contains("Hello"));
  System.out.println(s.startsWith("He"));
  System.out.println(s.endsWith("He"));

  s = "Hello, world!";
  String[] array = s.split(",");
  System.out.println(array[0] + "!" + array[1] + "!");

  String str = "My name is %s! I'm %d years old!";
  int age = 30;
  String name = "Ivan";
  System.out.println(String.format(str, name, age));

  String age2 = "30";
  int a = Integer.parseInt(age2);

  s = "Hello, world!";
  System.out.println(s.substring(1, 5));
  System.out.println(s.substring(7));

  String s1 = "hello";
  s2 = "world";
  String s3 = "!";

  String res = s1 + s2 + s3;
  System.out.println(res);

  res = s1.concat(s2).concat(s3);
  System.out.println(res);

// Операции
  int a;
  a = 10;
  a = 20;

  int b;
  b = a;

  int c, d;
  c = d = b;
  a = (b + c) * d;

  a = 13;
  b = 5;
  System.out.println(a + b); // 18
  System.out.println(a - b); // 8
  System.out.println(a * b); // 65
  System.out.println(a / b); // 2
  System.out.println(a % b); // 3

  double e = 13;
  double f = 5;
  System.out.println(e / f); // 2.6
  System.out.println(e % f); // 3.0

  System.out.println(a < b); // false
  System.out.println(a > b); // true
  System.out.println(a >= b); // true
  System.out.println(a <= b); // false
  System.out.println(a == b); // false
  System.out.println(a != b); // true
  System.out.println(a + 5 <= b); // false
  System.out.println(!(a + 5 <= b)); // true
  System.out.println(!(false)); // true

  System.out.println(a < b || a > b); // true
  System.out.println(a < b && a > b); // false

  int i = 0;
  i++;
  i--;

  i = 5;
  System.out.println(i++); // 5
  System.out.println(++i); // 7

  a = 9;
  System.out.println(Math.sqrt(a)); // 3.0
  System.out.println(Math.pow(a, 3)); // 729.0

  a += 5; // a = a + 5;
  a -= 5; // a = a - 5;
  a *= 5; // a = a * 5;
  a /= 5; // a = a / 5;
  a %= 5; // a = a % 5;

// Условные операторы
  int i = 10;

  if ( i > 5) {
      System.out.println("i > 5");
  } else  if ( i == 5) {
      System.out.println("i == 5");
  } else {
      System.out.println("i < 5");
  }

  switch (i) {
      case 1:
          System.out.println("i == 1");
      case 10:
          System.out.println("i == 10");
      default:
          System.out.println("i == i");
  }

// Циклы
  for (int i = 0; i < 5; i++) {
      System.out.println(i);
  }

  int[] array = {1, 4, 5, 7};
  for (int element : array) {
      System.out.println(element);
  }

  int j = 0;
  while (j < 10) {
      System.out.println(j);
      j++;
  }

  j = 0;
  do {
      System.out.println(j);
      j++;
  } while (j < 10);

// Коллекции List
  List<Integer> list = new ArrayList<>();

  list.add(5);
  list.add(10);
  list.add(9);

  System.out.println(list.get(1));

  list.set(2, 100);
  list.remove(1);

  System.out.println(list.size());

  list.clear();

  List<Integer> list2 = new ArrayList<>();
  list2.add(45);
  list2.add(56);

  list.addAll(list2);
  list.removeAll(list2);

  System.out.println(list.isEmpty());

  System.out.println(list.contains(100));
  System.out.println(list.containsAll(list2));

// Коллекции Set
    Set<Integer> set = new HashSet<>();

    set.add(11);
    set.add(10);
    set.add(12);
    set.add(11); // не присвоит

    set.remove(12);
    set.contains(10);
    set.clear();

    System.out.println(set.size());

    for (int i : set) {
        System.out.println(i);
    }

// Коллекции Map
  Map<Integer, String> map = new HashMap<>();
  Map<String, String> map2 = new HashMap<>();

  map.put(1, "Black");
  map.put(2, "White");
  map.put(3, "Yellow");
  map.put(10, "Green");

  System.out.println(map.get(1));
  System.out.println(map.containsKey(10));
  System.out.println(map.containsValue("Grey"));

  Set<Integer> keys = map.keySet();
  Iterator<Integer> iterator = keys.iterator();

  while (iterator.hasNext()) {
      int key = iterator.next();
      System.out.println(key + " = " + map.get(key));
  }

  map.clear();
  System.out.println(map.size());

// Итераторы
  Iterator<Integer> iterator = list.iterator();

  while (iterator.hasNext()) {
      System.out.println(iterator.next());
  }

// Методы
  public class TestClass {
      public static void main(String[] args) {

          int a = 13;
          int b = 3;
          int sum;

          sum = getSum(a, b);
          System.out.println(sum);

          showSum(1, 3, 9);

          sayhHello();
      }

      static int getSum(int x, int y) {
          int sum;
          sum = x + y;
          return sum;
      }

      static void showSum(int x, int y, int z) {
          int sum = x + y + z;
          System.out.println(sum);
      }

      static void sayhHello() {
          System.out.println("Hello");
      }
  }

// Исключения
  try {
      System.out.println("x/y = " + x/y);
  } catch (ArithmeticException e) {
      System.out.println("Problem!");
  } finally {
      System.out.println("Finish!");
  }

  if (y == 0) {
      throw new ArithmeticException("Cannot devide by zero");
  } else {
      System.out.println("x/y = " + x/y);
  }

// Классы
  public class Car {

      public Car() {
          System.out.println("New car created");
      }

      public Car(String color) {
          this.color = color;
          System.out.println("New car created");
      }

      static int var = 10;
      final static int varFinal = 10;
      static void method() {
          System.out.println("var = " + var);
      }

      int width;
      int length;
      int weight = 2000;
      int maxWeight = 2700;
      String color;
      int speed;
      int maxSpeed = 200;

      public void addWeight(int weight) {
          this.weight += weight;
          System.out.println("New weight = " + this.weight);
      }

      public void drive(int speed) {
          if (weight <= maxWeight) {
              this.speed = speed;
          } else {
              System.out.println("Can not drive!");
          }
      }
  }

  Car car1 = new Car();

  car1.color = "black";
  car1.length = 5000;
  car1.width = 2000;

  car1.addWeight(50);
  car1.drive(120);

  System.out.println("Car.var = " + Car.var);
  Car.method();
 
// Наследование
  public class Animal {
      String name;
      String color;

      public int b; // для всех
      int c; // только в пакете
      protected int d; // только в этом классе и наследнике
      private int у; // только в этом классе

      public  void  walk(String place) {
          System.out.println("place = " + place);
      }
  }

  public class Dog extends Animal {
      int weight;

      public void sit() {
          System.out.println("I'm sittting");
      }

      @Override
      public void walk(String place) {
          System.out.println("place = home");
      }
  }

// Абстрактный Класс
  public abstract class Animal {
      public int b; // для всех
      int c; // только в пакете
      String name;

      public abstract void  saySmth();
      public abstract void  eat();

      public void walk(String place) {
          System.out.println("place = " + place);
      }
  }

// Интерфейсы
  public interface Transport {
      void go();
      void stop();
  }

  public class Car implements Transport {
      @Override
      public void go() {
          System.out.println("Go!");
      }

      @Override
      public void stop() {
          System.out.println("Stop!");
      }
  }

  public class Car implements Transport, Mashin {
    ...
  }



System.out.println("Good bye!");