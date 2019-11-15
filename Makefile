setup:
	docker volume create node_modules
install:
	docker-compose	-f docker-compose.builder.yml run --rm install
start:
	docker-compose up
stop:
	docker-compose down
restart:
	make stop && make start