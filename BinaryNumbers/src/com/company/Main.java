package com.company;

import java.util.Scanner;

public class Main {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        String strBinary = Integer.toBinaryString(n);
        //System.out.println("Binary = " + strBinary);
        int maxNumber = 0;
        int count = 0;

        for (int i = 0; i < strBinary.length(); i++) {
            char c = strBinary.charAt(i);
            if (c == '1') {
                count++;
            } else {
                if (count > maxNumber) {
                    maxNumber = count;
                }
                count = 0;
            }

            if (i == strBinary.length() - 1 && count > maxNumber) {
                maxNumber = count;
            }
        }

        System.out.println("Total = " + count);
        scanner.close();
    }
}
