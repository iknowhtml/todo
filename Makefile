setup:
	docker volume create node_modules
install:
	docker-compose -f docker-compose.builder.yml run --rm install
start:
	docker-compose -f docker-compose.development.yml up