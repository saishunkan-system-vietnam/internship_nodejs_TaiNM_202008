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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airline`
--

LOCK TABLES `airline` WRITE;
/*!40000 ALTER TABLE `airline` DISABLE KEYS */;
INSERT INTO `airline` VALUES (1,'VNA','Vietnam Airlines'),(2,'VJA','Vietjet Airlines'),(3,'JSA','Jetstar Airlines'),(4,'BBA','Bamboo Airlines'),(7,'VNA','TEST'),(8,'đas','dsdsds'),(9,'AAA','SSS');
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES (1,'HN'),(2,'HCM'),(8,'Vinh'),(9,'Vinh'),(11,'Vinh'),(12,'Vinh'),(13,'Vinh'),(14,'Vinh'),(15,'Vinh'),(16,'Vinh'),(17,'Vinh'),(18,'Vinh'),(19,'Vinh'),(20,'Vinh'),(21,'Vinh21');
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
INSERT INTO `category` VALUES (1,1),(1,2),(1,3),(1,4),(2,2),(2,3),(2,4),(3,3),(3,4),(4,3),(4,4),(2,1),(3,1),(3,2),(4,2),(4,3),(4,4),(8,2),(8,3),(8,4);
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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `ticket_id` bigint NOT NULL,
  `airline` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `seat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `start` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `end` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `status` int DEFAULT '1',
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,2,'2020-09-15 02:44:11'),(2,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,2,'2020-09-15 02:59:40'),(3,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,2,'2020-09-15 02:59:42'),(4,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,2,'2020-09-15 03:00:05'),(5,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,4,'2020-09-15 03:57:52'),(6,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,1,'2020-09-15 02:59:06'),(7,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,4,'2020-09-15 03:00:11'),(8,57,32,'Vietjet Airlines','Business Class','HCM','HN',77777,'1600089060000',1,2,'2020-09-15 02:59:27'),(9,78,32,'Vietjet Airlines','Business Class','HCM','HN',6666,'1600167540000',1,4,'2020-09-15 03:38:07'),(10,78,32,'Vietjet Airlines','Business Class','HCM','HN',6666,'1600167540000',1,4,'2020-09-15 03:58:03'),(11,78,34,'Vietjet Airlines','First Class ','HCM','Vinh',50,'1599642000000',1,1,'2020-09-15 03:13:05'),(12,78,35,'Vietnam Airlines','First Class ','HN','Vinh',5001,'1600163880000',1,1,'2020-09-15 03:13:19'),(13,78,44,'Vietnam Airlines','First Class ','HN','HCM',2000,'1599727680000',1,1,'2020-09-15 03:39:53'),(14,78,61,'Vietnam Airlines','Comfort Class','HN','HCM',33,'1600103220000',1,1,'2020-09-15 03:40:04'),(15,78,35,'Vietnam Airlines','First Class ','HN','Vinh',5001,'1600163880000',1,1,'2020-09-15 03:49:32'),(16,78,32,'Vietnam Airlines','Business Class','HCM','HN',6666,'1600165920000',1,1,'2020-09-15 03:49:51'),(17,78,32,'Vietjet Airlines','Business Class','HCM','HN',6666,'1600167240000',1,1,'2020-09-15 06:15:56');
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
INSERT INTO `seat` VALUES (1,'First Class '),(2,'Business Class'),(3,'Comfort Class'),(4,'Economy Class'),(5,'SSS');
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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (32,2,2,2,1,'2020-09-15 10:54:00',52,6666,'2020-09-15 06:15:56'),(34,2,1,2,18,'2020-09-09 09:00:00',4,50,'2020-09-15 03:13:05'),(35,1,1,1,9,'2020-09-15 09:58:00',49,5001,'2020-09-15 03:49:32'),(42,1,2,1,8,'2020-09-09 00:35:00',1,1,'2020-09-09 02:35:52'),(44,1,1,1,2,'2020-09-10 08:48:00',21,2000,'2020-09-15 03:39:53'),(47,3,2,8,2,'2020-09-10 16:07:00',102,22,'2020-09-10 09:08:03'),(49,1,2,8,2,'2020-09-11 13:20:00',1,1,'2020-09-11 06:19:27'),(53,2,2,1,2,'2020-09-07 00:00:00',12,5000,'2020-09-14 04:39:57'),(60,4,1,1,9,'2020-09-14 17:05:00',2,2000,'2020-09-14 10:05:12'),(61,1,3,1,2,'2020-09-14 17:07:00',33,33,'2020-09-15 03:40:05'),(62,9,5,2,1,'2020-09-15 10:54:00',10,5555,'2020-09-15 03:55:27');
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
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (54,'phanjfhe2@gmail.com','$2b$10$X6TouuZ9/cTUMZjhXQCLvuT3r5H64mm32/1EfQhPU.CU349/FcRyW','chung',362060601,'HN',1,'2020-09-11 08:59:15'),(55,'phan2@gmail.com','$2b$10$fiAKKsuoikf9hMW.b2TYHu5h1Mi.H7.mKmaBre8r8fe33xSxkZsPa','chung',362060601,'HN',1,'2020-09-04 04:28:22'),(56,'phan@gmail.com','$2b$10$07GZMC4KSp7LfXT4Lk8rbuZ/CDm9xlJzBzHt/KbkZdUz9vEjLLb/S','chung',362060601,'HN',1,'2020-09-04 04:29:06'),(57,'phan10@gmail.com','$2b$10$V4NSCe8aA0fsbq2I1IDNT./bS/5L53TdvlI9t6t59RIYgJF1Gi3d2','chung',362060601,'HN',1,'2020-09-04 05:57:20'),(61,'asdasdsa@gmail.com','$2b$10$IGRDu7nJSNaTb5qJ3XLjiOlmrQtSuifqiFWtG1UiT0gNRpXOCQhva','nghiatest',975415424,'HN',1,'2020-09-09 06:06:11'),(62,'dsdsdsd@gmail.com','$2b$10$Sng1U.9K8wqIAY3d1zYhGu190rq5TFpWpjUiYzp7OEJP.9hTldjCu','nghiatest',975415424,'HN',1,'2020-09-14 04:31:54'),(63,'asdasdsa@gmail.com','$2b$10$VcO8wkBNzE4.SOVIy.XiH.sfmsy.4OLYc4mFYYRj349Tk809tqWDC','nghiatest123',975415424,'HN',1,'2020-09-09 06:06:21'),(64,'test@gmail.com','$2b$10$nxs1VBBD3JUJuIux5FvUquusQT9xR1Drh9ukDsJduf5HhI9qCnHtu','nghiatest123',975415424,'HN',1,'2020-09-09 06:06:59'),(65,'test@gmail.com','$2b$10$kSISsoEW31otoGzWHMfn2uExgOBtXVz7Z3sH/PE0BlXpCE79/BACC','nghiatest123',975415424,'HN',1,'2020-09-09 06:07:00'),(66,'ttttt@gmail.com','$2b$10$S6iSXOg9gAmgla1MxbU3/O2M4VDE79msynQlv.mpt0a7KwtN6Ttg.','nghia',976404956,'adasdas',1,'2020-09-09 06:20:46'),(67,'asssss232132@gmail.com','$2b$10$bWGkjurw5U28w/PlYjoGr.85Ejq5s7RR5/XtZWcJZw0BgTFOdjhA2','nghia',976404956,'sdfdsfd',1,'2020-09-11 03:03:45'),(68,'aasdasa3@gmail.com','$2b$10$elYlzTIOssSzUoMxWFeJ1.dEc0Ume49..manBRio9fME25sIBfgK2','nghia@gmail.com',976404956,'asdas',1,'2020-09-09 08:03:57'),(69,'truongddddd@gmail.com','$2b$10$zbvrjY3RTEKmxf0gJj27Iukw/AVknf1GWwvVfn.rR4ys/I.7Gy8dy','phan10@gmail.com',92323232,'dasdasds',1,'2020-09-09 08:04:25'),(71,'nghia@gmail.com','$2b$10$ZbW6qKM4pHyCJSAuDFVjpem8iwETj46I2JREAqCpCNLixL12.2Fc.','nghia',976404956,'HN',2,'2020-09-11 02:37:23'),(72,'truongbanghiadsadsdsds@gmail.com','$2b$10$/BBw5rvT9073HJenjtXP0O2U7AE.hsAs3IvfN.6cqtIt.h5FKRvWS','asddsds',976404956,'asdasds',1,'2020-09-11 03:43:05'),(73,'truongbanghia123@gmail.com','$2b$10$U9jK1aZ0Sa8QnU5WlQEkXenMa76ffO5A9qcqBxFjh7J1DiyrVeXT2','nghia@gmail.com',976404956,'dasds',1,'2020-09-11 03:45:22'),(74,'truongbanghia123@gmail.com','$2b$10$/hIoS3Uno2KyPtfWu6bIBullZdv9R2dfTLEQgJVfb4AD4VNkiAvD2','nghia@gmail.com',976404956,'12323',1,'2020-09-11 03:46:57'),(75,'truongbanghia12d3@gmail.com','$2b$10$U7Q55szyawRIbiIVkTYvmuSdShYNTsUn69CTwdCJ3vze4lYzwoxmq','adsd',976404956,'sdasds',1,'2020-09-11 03:48:12'),(76,'truongbanghia1đas23@gmail.com','$2b$10$uK8NsRETRvxo4y3Tyc62au0dCXbT.3K9zjWYuF6GVmoFoAsxWGIfm','dasdsd',976404956,'dasdasds',1,'2020-09-11 03:49:14'),(77,'gggggg@gmail.com','$2b$10$o0Sb3.Jqk7Dlm0gQrurinOhNP.p8FiXt6eacOOAkQliYpR0.fcvFC','nghia@gmail.com',976404956,'đâsd',2,'2020-09-11 04:13:26'),(78,'client@gmail.com','$2b$10$psJG58icsPFRAaj56WXtcOKSKW2G8jlfCJLSotsRfQdka/XUr2PTK','Trương Bá Nghĩa',976404956,'Hà Nội',2,'2020-09-14 07:16:01');
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

-- Dump completed on 2020-09-15 15:11:48
