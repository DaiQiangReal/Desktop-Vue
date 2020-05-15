a="aaaawdfuckawdawfuckawdfuckawd"
start=0
while True:
	try:
		position=a.index("fuck",start)
	except Exception as e:
		break
	print(position)
	start=position+4
