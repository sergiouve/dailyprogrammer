#!/usr/bin/env python
# OO solution

class Driver(object):

	def __init__(self, stops, gossip):
		self.stops = stops
		self.current_stop_index = 0
		self.current_stop = self.stops[self.current_stop_index]

	def drive_to_next_top(self):
		if self.current_stop_index == (len(self.stops) - 1):
			self.current_stop_index = 0
		else:
			self.current_stop_index += 1

		self.current_stop = self.stops[self.current_stop_index]

class Day(object):

	def __init__(self, drivers):
		self.drivers = drivers
		self.length = 480
		self.minute = 0

	def update_time(self):
		self.minute += 1

		for driver in self.drivers:
			driver.drive_to_next_top()

		self.check_meeting()

	def check_meeting(self):
		for driver in self.drivers:
			print driver.current_stop

class RoutesParser(object):

	def parse_routes(self, file):
		routes = []

		with open(file) as f:
			input_file = f.readlines()

		for line in input_file:
			line = line.split(' ')

			for index, value in enumerate(line):
				line[index] = value.rstrip()

			routes.append(line)

		return routes

def main():
	parser = RoutesParser()
	routes = parser.parse_routes('../input.txt')

	drivers = []

	for index, route in enumerate(routes):
		drivers.append(Driver(route, index))

	day = Day(drivers)

	for i in range(0, 480):
		day.update_time()

if __name__ == '__main__':
	main()