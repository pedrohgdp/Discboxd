FROM maven:3.9.5-eclipse-temurin-17-alpine AS builder

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline
COPY src /app/src
RUN mvn clean package -DskipTests

FROM maven:3.9.5-eclipse-temurin-17-alpine 
WORKDIR /app
COPY --from=builder /app/target/main-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 3333

ENTRYPOINT ["java", "-jar", "app.jar"]
