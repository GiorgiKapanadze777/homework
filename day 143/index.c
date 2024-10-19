#include <stdio.h>

float get_temp(float celsius);

int main() {
    float temp = 0;
    char c;
    int is_negative = 0;
    
    printf("Please enter your temperature in Celsius: ");

    c = getchar();
    if (c == '-') {
        is_negative = 1;
        c = getchar();
    }

    while (c != '\n') {
        if (c >= '0' && c <= '9') {
            temp = temp * 10 + (c - '0');
        } else {
            printf("Oops! You entered an invalid character. Try again with digits only.\n");
            return 1;
        }
        c = getchar();
    }

    if (is_negative) {
        temp = -temp;
    }

    printf("You entered a temperature of %.2f°C.\n", temp);

    printf("\nYour temperature in is %.2f\n", get_temp(temp));

    return 0;
}

float get_temp(float celsius) {
    return (celsius * 3.0) + 15;
}
