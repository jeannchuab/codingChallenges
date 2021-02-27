package com.company;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigInteger;
import java.util.Scanner;

public class Main {

    // Complete the flippingBits function below.
    static long flippingBits(long n) {

        String strBinary = String.format("%32s", Long.toBinaryString(n)).replace(' ', '0');
        String strBinaryFlip = "";

        for (int i = 0; i < strBinary.length(); i++) {
            if (strBinary.charAt(i) == '0') {
                strBinaryFlip = strBinaryFlip + '1';
            } else {
                strBinaryFlip = strBinaryFlip + '0';
            }
        }

        String result = String.format("%32s", strBinaryFlip).replace(' ', '0');
        long base10 = parseLong(result,2);
        return base10;
    }

    private static long parseLong(String s, int base) {
        return new BigInteger(s, base).longValue();
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        long number = 4L;
        long result = flippingBits(number);
        System.out.println(result);
    }
}
