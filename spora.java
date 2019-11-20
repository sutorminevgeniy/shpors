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

// Коллекция
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

System.out.println("Good bye!");