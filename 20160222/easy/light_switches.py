#!/usr/bin/bash

with open('large_input.txt') as f:
	input_data = f.readlines()

input_data = [line.rstrip('\n',) for line in input_data]

n_lights = int(input_data[0])
lights = [False] * n_lights
ite = 0
del input_data[0]

for value in input_data:
	numbers = value.split()
	raw_number_a = numbers[0]
	raw_number_b = numbers[1]

	number_a = int(raw_number_a)
	number_b = int(raw_number_b)

	if number_b < number_a:
		aux = number_b
		number_b = number_a
		number_a = aux

	number_b = number_b + 1

	# lights[number_a:number_b] = [not light for light in lights]

	indices = range(number_a, number_b)
	for i in indices:
		lights[i] = not lights[i]

	ite = ite + 1
	print value
	print ite

print sum(lights)