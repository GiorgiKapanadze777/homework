import numpy as np

# Example input data and weights
example_input = [1, 0.2, 0.1, 0.05, 0.2]
example_weights = [0.2, 0.12, 0.4, 0.6, 0.9]
input_vector = np.array(example_input)
weights = np.array(example_weights)
bias_weight = 0.2

# Calculate activation level and determine perceptron output
activation_level = np.dot(input_vector, weights) + bias_weight
threshold = 0.5
perceptron_output = 1 if activation_level >= threshold else 0
print(perceptron_output)

# Update weights based on the expected output
expected_output = 0
weights += (expected_output - perceptron_output) * input_vector

# Perceptron learning for sample data
sample_data = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
]
expected_results = [0, 1, 1, 1]

# Initialize weights and bias randomly
weights = np.random.random(2) / 1000
bias_weight = np.random.random() / 1000
activation_threshold = 0.5

# Print initial predictions
for idx, sample in enumerate(sample_data):
    input_vector = np.array(sample)
    activation_level = np.dot(input_vector, weights) + bias_weight
    perceptron_output = 1 if activation_level > activation_threshold else 0
    print(f'Predicted: {perceptron_output}')
    print(f'Expected: {expected_results[idx]}')
    print()

# Train the perceptron over multiple iterations
iterations = 5
for iteration_num in range(iterations):
    correct_answers = 0
    for idx, sample in enumerate(sample_data):
        input_vector = np.array(sample)
        activation_level = np.dot(input_vector, weights) + bias_weight
        perceptron_output = 1 if activation_level > activation_threshold else 0
        if perceptron_output == expected_results[idx]:
            correct_answers += 1
        weights += (expected_results[idx] - perceptron_output) * input_vector
        bias_weight += (expected_results[idx] - perceptron_output)
    print(f'{correct_answers} correct answers out of 4, for iteration {iteration_num}')
