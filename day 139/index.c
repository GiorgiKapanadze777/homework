#include <stdio.h>

// Function to convert Fahrenheit to Celsius
float fahrenheitToCelsius(float fahr) {
    return (5.0 / 9.0) * (fahr - 32.0);
}

int main() {
    float fahr;
    int lower = 0, upper = 300, step = 20;

    fahr = lower;
    while (fahr <= upper) {
        printf("%3.0f F = %6.1f C\n", fahr, fahrenheitToCelsius(fahr));
        fahr += step;
    }

    return 0;
}
