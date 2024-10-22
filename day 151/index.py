import numpy as np
import matplotlib.pyplot as plt

x = [0, 1, 2, 3]
y = [0, 1, 4, 9]

# Plot y vs x
plt.plot(x, y)

# Display the plot
plt.show()

# Creating a more detailed plot
x = np.linspace(-5, 5, 100)
plt.plot(x, x**2, 'g--', label='quadratic')
plt.plot(x, x**3, label='cubic', linewidth=1, color='blue')

# Adding legend
plt.legend(loc=2)

# Adding title and labels with custom fontsizes
plt.title('Plot of various functions', fontsize=20)
plt.xlabel('x axis', fontsize=18)
plt.ylabel('y axis', fontsize=18)

# Defining the limits of the axes
plt.xlim(-6, 6)
plt.ylim(-10, 10)

# Displaying the grid
plt.grid()

# Adding another function to the plot (log of the absolute value of x)
plt.plot(x, np.log(np.abs(x)), label='log natural', linewidth=1, color='red')

# Displaying the final plot with all elements
plt.show()
