import numpy as np

input_vector = np.array([1, 0.2, 0.1, 0.05, 0.2])

weights = np.array([0.2, 0.12, 0.4, 0.6, 0.90])
bias_weight = 0.2

activation_level = np.dot(input_vector, weights) + bias_weight
threshold = 0.5

perceptron_output = 1 if activation_level >= threshold else 0
expected_output = 0

new_weights = weights + (expected_output - perceptron_output) * input_vector
print(new_weights)
