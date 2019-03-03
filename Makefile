build:
	docker-compose -f docker-compose.dev.yml up --build
run:
	docker-compose -f docker-compose.dev.yml up
down:
	docker-compose down