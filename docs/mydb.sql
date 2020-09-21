-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `airline`
--

DROP TABLE IF EXISTS `airline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airline` (
  `alID` int NOT NULL AUTO_INCREMENT,
  `alCode` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`alID`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airline`
--

LOCK TABLES `airline` WRITE;
/*!40000 ALTER TABLE `airline` DISABLE KEYS */;
INSERT INTO `airline` VALUES (95,'VNA','Vietnam Airlines'),(96,'VJ','Vietjet Air'),(97,'BL','Jetstar Pacific Airlines'),(98,'QH','Bamboo Airways');
/*!40000 ALTER TABLE `airline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `airport`
--

DROP TABLE IF EXISTS `airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airport` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES (1,'HN'),(2,'HCM'),(8,'Vinh'),(23,'Hai Phong'),(24,'Nha Trang');
/*!40000 ALTER TABLE `airport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `alID` int DEFAULT NULL,
  `sID` int DEFAULT NULL,
  KEY `FK_alID` (`alID`),
  KEY `FK_sID` (`sID`),
  CONSTRAINT `FK_alID` FOREIGN KEY (`alID`) REFERENCES `airline` (`alID`),
  CONSTRAINT `FK_sID` FOREIGN KEY (`sID`) REFERENCES `seat` (`sID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (95,1),(95,2),(95,3),(95,4),(96,1),(96,2),(96,3),(97,4),(97,3),(97,2),(98,1),(98,2);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwts`
--

DROP TABLE IF EXISTS `jwts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jwt` varchar(555) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwts`
--

LOCK TABLES `jwts` WRITE;
/*!40000 ALTER TABLE `jwts` DISABLE KEYS */;
INSERT INTO `jwts` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQwQ2RsZmM5S2tLeWY5OThiVGN4aWp1TmlUa3p1a2dTdHhlTWRVZFR6WUVVeDRsbzYxcXRnRyIsImlhdCI6MTU5ODYwMTU5NywiZXhwIjoxNTk5MjA2Mzk3fQ.7QBckBA-eVH8NJkU09AxUYpI3RE9dj893uE1PUnW5rc','2020-08-28 08:00:03'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROMXB3cThoN2JVUXdBNEhNMHgxdVB1VW4uZUlCWkpHUU9TdDlnZ3lPZGMzOS9kZ2lNLnBQcSIsImlhdCI6MTU5ODYwMTk1MywiZXhwIjoxNTk5MjA2NzUzfQ.iZV0JFV6Hvivyn2ffeegxa4MK4TqxMwUY6g8VxKfibA','2020-08-28 08:05:59'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR4bllkcUxzWmxGWXowSjhBWUUvWEd1WWloWWJiajlNdHdybnJDQnRpYUpQLnIzaEdFUHRaNiIsImlhdCI6MTU5ODYwMjEwMywiZXhwIjoxNTk5MjA2OTAzfQ.N3k5A7EUdc5Egh3JSfTCg6lvCSw6GPfn6E5bTj-Shxs','2020-08-28 08:08:29'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzIyNywiZXhwIjoxNTk5MjEyMDI3fQ.TyApnGhBIZgvwGVBcwiE_EScb8xh4E6DpKc2j-I6XZg','2020-08-28 09:33:53'),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzI5OSwiZXhwIjoxNTk5MjEyMDk5fQ.5YM0U9guw_76KS9qYloFKui4KkqVZYY9saSFRizz6FM','2020-08-28 09:35:05'),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzMyNSwiZXhwIjoxNTk5MjEyMTI1fQ.OKiONdHb5Q9QLsVWbLJB5BtGz95f6aX3qtZONrsNcGM','2020-08-28 09:35:31'),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzM5NiwiZXhwIjoxNTk5MjEyMTk2fQ.xeIjngfa8_80qqyQ8ovfQoJoszrzHOezuWemC2AXOZA','2020-08-28 09:36:42'),(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzY4MywiZXhwIjoxNTk5MjEyNDgzfQ.Rw69FzoLPO9NMKgZmH_RAU26as0uyjb5CDimYTfsXNc','2020-08-28 09:41:29'),(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwNzcyMywiZXhwIjoxNTk5MjEyNTIzfQ.T7YvPVkosZsRJAxH2s7qdDoJgB_xpZ51VAiuSRjqKuo','2020-08-28 09:42:09'),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwOTA3MCwiZXhwIjoxNTk5MjEzODcwfQ.Ztyd1YcTLuIjtX2KVBacmxV3-q7fSvlfYuUBOk5vgT4','2020-08-28 10:04:37'),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODYwOTMxNiwiZXhwIjoxNTk5MjE0MTE2fQ.Cvb397vzsqaqTxALBVITInxnq9WiXkvik3vBkqKm_po','2020-08-28 10:08:43'),(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg0NDQ1NSwiZXhwIjoxNTk5NDQ5MjU1fQ.yPdIE2YJpqMrH8xba_lRp7BSGvHzrGuqGb1sDzY_qxo','2020-08-31 03:27:47'),(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg0NDY1MywiZXhwIjoxNTk5NDQ5NDUzfQ.U_K5gY3z2c6fiFMDXukALAYBqbxXuf7T8Mqx0Wx90QU','2020-08-31 03:31:05'),(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg0NTIwMSwiZXhwIjoxNTk5NDUwMDAxfQ.HmfPxebsHfa4Oz-102JGADZU05nOB8WvN5r99KgCHuY','2020-08-31 03:40:13'),(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg0NTMwNCwiZXhwIjoxNTk5NDUwMTA0fQ.2b2mRWGMYs78cMjgpjGHota3hQ18-84YahgsGoRTikc','2020-08-31 03:41:55'),(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg0Njc4OSwiZXhwIjoxNTk5NDUxNTg5fQ.i0XZY2O_81D-6cEur9Tgxw_KCm-po8zijwVZGzqNsC4','2020-08-31 04:06:41'),(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODg2Njc5NSwiZXhwIjoxNTk5NDcxNTk1fQ.75RUEbbccW0e7zabddunWuKRN52cMrjtfJsJONTG7os','2020-08-31 09:40:06'),(21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5jaHVuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5ODkzMDE1OSwiZXhwIjoxNTk5NTM0OTU5fQ.m73Fj-8Xsyjl-yC56hQSQMwGn7KYm4lZMkahgY_5THs','2020-09-01 03:15:59'),(24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkL1VXUThCZ2tkVE5xaTVKZm5VdXloLjBreTZtNkhYVWNLN3pSTkNObnF4bHJGY2hybWhsNTYiLCJpYXQiOjE1OTg5NDY3MzcsImV4cCI6MTU5OTU1MTUzN30.7WINfwH8s_W3xYgD5wuNQS3MUBu6W5vqi98ddXydOgc','2020-09-01 07:52:18');
/*!40000 ALTER TABLE `jwts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_ticket`
--

DROP TABLE IF EXISTS `order_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_ticket` (
  `order_id` bigint unsigned DEFAULT NULL,
  `ticket_id` bigint unsigned DEFAULT NULL,
  `quantity` int NOT NULL,
  `airline` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `seat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `start` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `end` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  KEY `orders` (`order_id`),
  KEY `tickets` (`ticket_id`),
  CONSTRAINT `orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `tickets` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_ticket`
--

LOCK TABLES `order_ticket` WRITE;
/*!40000 ALTER TABLE `order_ticket` DISABLE KEYS */;
INSERT INTO `order_ticket` VALUES (17,109,2,'Bamboo Airways','Business Class','Vinh','HCM',700000,'1600447140000'),(17,108,2,'Jetstar Pacific Airlines','Business Class','HN','Hai Phong',1000000,'1600447440000'),(17,107,2,'Vietjet Air','Business Class','HN','Nha Trang',600000,'1600447080000'),(18,109,2,'Bamboo Airways','Business Class','Vinh','HCM',700000,'1600447140000'),(18,108,2,'Jetstar Pacific Airlines','Business Class','HN','Hai Phong',1000000,'1600447440000'),(18,105,2,'Vietnam Airlines','Economy Class','HN','HCM',5000000,'1600447080000');
/*!40000 ALTER TABLE `order_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `total` bigint NOT NULL,
  `status` int DEFAULT '1',
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (17,78,4600000,2,'2020-09-21 01:58:21'),(18,78,18000000,2,'2020-09-21 01:58:35');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `sID` int NOT NULL AUTO_INCREMENT,
  `sName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`sID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'First Class '),(2,'Business Class'),(3,'Comfort Class'),(4,'Economy Class');
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `user_id` bigint NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `airline_id` int NOT NULL,
  `seat_id` int NOT NULL,
  `start` bigint NOT NULL,
  `end` bigint NOT NULL,
  `date` datetime NOT NULL,
  `number_seat` int NOT NULL,
  `price` int NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `airline` (`airline_id`),
  CONSTRAINT `airline` FOREIGN KEY (`airline_id`) REFERENCES `airline` (`alID`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (102,95,1,1,2,'2020-09-18 16:37:00',50,1500000,'2020-09-18 09:37:29'),(103,95,2,1,2,'2020-09-18 16:37:00',50,1600000,'2020-09-18 09:37:51'),(104,95,3,1,2,'2020-09-18 16:38:00',20,2000000,'2020-09-18 09:38:12'),(105,95,4,1,2,'2020-09-18 16:38:00',10,5000000,'2020-09-18 09:38:28'),(106,96,1,1,8,'2020-09-18 16:38:00',100,500000,'2020-09-18 09:38:46'),(107,96,2,1,24,'2020-09-18 16:38:00',50,600000,'2020-09-18 09:39:03'),(108,97,2,1,23,'2020-09-18 16:44:00',500,1000000,'2020-09-18 09:39:23'),(109,98,2,8,2,'2020-09-18 16:39:00',200,700000,'2020-09-18 09:39:44');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (57,'phan10@gmail.com','$2b$10$V4NSCe8aA0fsbq2I1IDNT./bS/5L53TdvlI9t6t59RIYgJF1Gi3d2','chung',362060601,'HN',1,'2020-09-04 05:57:20'),(64,'test123ddd321@gmail.com','$2b$10$nxs1VBBD3JUJuIux5FvUquusQT9xR1Drh9ukDsJduf5HhI9qCnHtu','nghiatest123',975415424,'HN',1,'2020-09-21 02:05:35'),(65,'test@gmail.com','$2b$10$kSISsoEW31otoGzWHMfn2uExgOBtXVz7Z3sH/PE0BlXpCE79/BACC','nghiatest123',975415424,'HN',1,'2020-09-09 06:07:00'),(68,'aasdasa3@gmail.com','$2b$10$elYlzTIOssSzUoMxWFeJ1.dEc0Ume49..manBRio9fME25sIBfgK2','nghia@gmail.com',976404956,'asdas',1,'2020-09-09 08:03:57'),(69,'truongddddd@gmail.com','$2b$10$zbvrjY3RTEKmxf0gJj27Iukw/AVknf1GWwvVfn.rR4ys/I.7Gy8dy','phan10@gmail.com',92323232,'dasdasds',1,'2020-09-09 08:04:25'),(71,'nghia@gmail.com','$2b$10$ZbW6qKM4pHyCJSAuDFVjpem8iwETj46I2JREAqCpCNLixL12.2Fc.','nghia',976404956,'HN',2,'2020-09-11 02:37:23'),(72,'truongbanghiadsadsdsds@gmail.com','$2b$10$/BBw5rvT9073HJenjtXP0O2U7AE.hsAs3IvfN.6cqtIt.h5FKRvWS','asddsds',976404956,'asdasds',1,'2020-09-11 03:43:05'),(73,'truongbanghia123@gmail.com','$2b$10$U9jK1aZ0Sa8QnU5WlQEkXenMa76ffO5A9qcqBxFjh7J1DiyrVeXT2','nghia@gmail.com',976404956,'dasds',1,'2020-09-11 03:45:22'),(74,'truongbanghia123@gmail.com','$2b$10$/hIoS3Uno2KyPtfWu6bIBullZdv9R2dfTLEQgJVfb4AD4VNkiAvD2','nghia@gmail.com',976404956,'12323',1,'2020-09-11 03:46:57'),(75,'truongbanghia12d3@gmail.com','$2b$10$U7Q55szyawRIbiIVkTYvmuSdShYNTsUn69CTwdCJ3vze4lYzwoxmq','adsd',976404956,'sdasds',1,'2020-09-11 03:48:12'),(76,'truongbanghia1đas23@gmail.com','$2b$10$uK8NsRETRvxo4y3Tyc62au0dCXbT.3K9zjWYuF6GVmoFoAsxWGIfm','dasdsd',976404956,'dasdasds',1,'2020-09-11 03:49:14'),(78,'client@gmail.com','$2b$10$psJG58icsPFRAaj56WXtcOKSKW2G8jlfCJLSotsRfQdka/XUr2PTK','Trương Bá Nghĩa',976404956,'Hà Nội',2,'2020-09-14 07:16:01'),(80,'sdashjdgsa@gmail.com','$2b$10$TCmD9ZIaFbxZ1EisMYkyGuyBqbp8YeX6CLW5vCHGyCD./NYv7lj/W','asdasd',976404956,'dsfds ds fds fdsf',2,'2020-09-18 09:19:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 11:09:00
