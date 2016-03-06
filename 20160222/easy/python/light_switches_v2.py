#!/usr/bin/bash

with open('../large_input.txt') as f:
	input_data = f.readlines()

input_data = [line.rstrip('\n',) for line in input_data]
n_lights = int(input_data[0])
del input_data[0]

lights_on = 0
lower = n_lights
upper = 0

checked_lower = []
checked_upper = []

lights = [0] * n_lights

while (lower < upper) or upper == 0:
	for value in input_data:
		numbers = value.split()
		number_a = int(numbers[0])
		number_b = int(numbers[1])

		if number_b < number_a:
			aux = number_b
			number_b = number_a
			number_a = aux

		if number_a < lower and number_a not in checked_lower:
			lower = number_a

		if number_b > upper and number_b not in checked_upper:
			upper = number_b

	print lower
	checked_lower.append(lower)
	checked_upper.append(upper)

print lower,
print ' ',
print upper