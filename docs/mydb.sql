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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airline`
--

LOCK TABLES `airline` WRITE;
/*!40000 ALTER TABLE `airline` DISABLE KEYS */;
INSERT INTO `airline` VALUES (1,'VNA','Vietnam Airlines'),(2,'VJA','Vietjet Airlines'),(3,'JSA','Jetstar Airlines'),(4,'BBA','Bamboo Airlines');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES (1,'HN'),(2,'HCM'),(5,'Hue2');
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
INSERT INTO `category` VALUES (1,1),(1,2),(1,3),(1,4),(2,2),(2,3),(2,4),(3,3),(3,4),(4,3),(4,4);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
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
  `total` int NOT NULL,
  `status` int NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,150000,1,'2020-08-27 06:08:52'),(2,1,250000,1,'2020-08-27 06:28:57'),(6,1,250000,1,'2020-08-27 06:53:25'),(7,1,250000,1,'2020-08-27 06:53:25'),(8,1,250000,1,'2020-08-27 06:55:17'),(9,1,250000,1,'2020-08-27 06:55:17'),(10,1,250000,1,'2020-08-27 06:57:26'),(11,1,250000,1,'2020-08-27 06:57:26'),(12,1,250000,1,'2020-08-27 07:02:14'),(13,1,250000,1,'2020-08-27 07:03:21'),(14,1,250000,1,'2020-08-27 07:17:46'),(15,1,250000,1,'2020-08-27 07:17:47'),(16,1,250000,1,'2020-08-27 07:24:28'),(17,1,250000,1,'2020-08-27 07:26:28'),(18,1,250000,1,'2020-08-27 07:27:06'),(19,1,250000,1,'2020-08-27 07:27:46'),(20,1,250000,1,'2020-08-27 07:28:14'),(21,1,250000,1,'2020-08-27 07:30:31'),(22,1,250000,1,'2020-08-27 07:31:19'),(23,1,250000,1,'2020-08-27 07:31:46'),(24,1,250000,1,'2020-08-27 07:32:32');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'First Class'),(2,'Business Class'),(3,'Comfort Class'),(4,'Economy Class');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (4,1,2,1,2,'2020-09-07 00:00:00',6,5000,'2020-08-27 07:41:43'),(5,1,2,2,1,'2020-09-07 00:00:00',6,5000,'2020-08-27 07:42:13'),(7,2,2,2,1,'2020-09-07 00:00:00',6,5000,'2020-08-27 07:53:25'),(8,2,1,1,2,'2020-09-07 00:00:00',6,5000,'2020-08-27 07:53:37'),(9,2,2,1,2,'2020-09-07 00:00:00',6,5000,'2020-08-27 08:48:02'),(10,2,2,1,2,'2020-09-07 00:00:00',6,5000,'2020-08-27 08:48:26'),(11,1,3,2,1,'2020-09-07 00:00:00',6,5000,'2020-08-27 08:56:38'),(12,1,2,2,1,'2020-09-07 00:00:00',10,5000,'2020-08-27 09:21:12'),(13,1,2,2,1,'2020-09-07 00:00:00',6,5000,'2020-08-27 09:07:04'),(14,1,2,2,1,'2020-09-07 00:00:00',10,5000,'2020-08-27 09:08:13'),(15,1,2,2,1,'2020-09-07 00:00:00',10,5000,'2020-08-27 09:13:40'),(17,1,2,2,1,'2020-09-07 00:00:00',10,5000,'2020-08-27 09:38:00'),(18,1,2,1,2,'2020-09-07 00:00:00',10,5000,'2020-08-27 09:41:41'),(19,2,2,2,1,'2020-09-07 00:00:00',12,5000,'2020-08-27 09:42:59');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'truongbanghia123@gmail.com','$2b$10$4CQUzYQDj4u5mk72.o8aHeBKL1SktnibYhs7/Mi9EL5eC6I7kLCdi','222222',975424512,'HN',1,'2020-08-26 03:38:27'),(2,'nghia1@gmail.com','123456','nghia',976454141,'HN',1,'2020-08-25 02:26:10'),(3,'nghia2@gmail.com','123456','nghia',976454141,'HN',1,'2020-08-25 02:26:14'),(5,'truongbanghia123@gmail.com','123456','1111111',975424512,'HN',1,'2020-08-25 09:11:49'),(6,'truongbanghia123@gmail.com','$2b$04$gBeF.AlXdSXySJhuV9F1VeH0AQ7jMCuo6JxT/3yr32RceCA8HoONa','222222',975424512,'HN',1,'2020-08-25 10:16:07'),(7,'truongbanghia123@gmail.com','$2b$10$NiqvFYH0qUOift9H.r6ZEupiOJsrM3CGm02Ycva52REmqAjYMCFsO','222222',975424512,'HN',1,'2020-08-25 10:25:05'),(8,'truongbanghia123@gmail.com','$2b$10$pzLppB2rU0FzkRruCOeHvuPDTM9IlC3.z6W3Q5PuXtsJBEKx9TMea','222222',975424512,'HN',1,'2020-08-25 10:26:07'),(9,'truongbanghia123@gmail.com','$2b$10$P9zGaYgLCDaS9gFB6vZChO6itwdj2I.5En54ht1dCBpewxOzzYbqS','222222',975424512,'HN',1,'2020-08-26 08:27:40'),(10,'truongbanghia123@gmail.com','$2b$10$P0RbBhnfNhMY/3cOc0yMhOnyxaaVHaJ/2VPUUcC1bV8TaenkJzsdq','222222',975424512,'HN',1,'2020-08-26 08:28:27'),(11,'truongbanghia123@gmail.com','$2b$10$YctdXj55cnw5zvbNhl4i.ObHNUiEUHp3AGYspzm.n.VJWzKMQa2S2','222222',975424512,'HN',1,'2020-08-26 08:41:21'),(12,'truongbanghia@gmail.com','$2b$10$c9W0Wy8sOxcoMO4wtNLyoetw/Mv9rEvoCOhYY9hgSjr3x9BOcI5ga','222222',975424512,'HN',1,'2020-08-26 09:02:31'),(13,'truongbanghia@gmail.com','$2b$10$geLG62dS/waCxQ4eGIDsPOnq2EC9MyMaVMSXJu9q636pRmZkfaBh2','222222',975424512,'HN',1,'2020-08-26 09:04:48'),(14,'truongbanghia@gmail.com','$2b$10$WVvSEAjslcAqMS8ZVadb/eRrNcyQ8CyOtRqpcnTF3Y/GOtpWScPsi','222222',975424512,'HN',1,'2020-08-26 09:04:55'),(15,'truongbanghia@gmail.com','$2b$10$k3RA6Ia.xJom8DxZTXzrhOxiX6N7g/jnRFR3QTyurFEmkScy0TIDS','222222',975424512,'HN',1,'2020-08-26 09:04:59'),(16,'truongbanghia@gmail.com','$2b$10$C6DXlk4K2rvLqsgOwS3ZFexoZSP41DWNpg8ygcAOf1kQ85ZRNBaEm','222222',975424512,'HN',1,'2020-08-26 09:05:24'),(17,'truongbanghia@gmail.com','$2b$10$.Egj0Ma4U3wAEtKU5CDud.jwt8wVlBgTbZIYSZzmkj6434ql6xOC6','222222',975424512,'HN',1,'2020-08-26 09:06:27'),(18,'truongbanghia@gmail.com','$2b$10$7B8zNqwe7UpHtTOySjIpAuxY1tiXy75gJd2Wu2E27EO0O0.LQnkay','    ',975424512,'HN',1,'2020-08-26 09:06:32'),(19,'truongbanghia@gmail.com','$2b$10$KMCLv8qDSefVuuQ9T98v4eWCNKo2/EmSCeck44l9O2url44G2Thva','    ',975424512,'HN',1,'2020-08-26 09:07:00'),(20,'truongbanghia@gmail.com','$2b$10$3FR/x/xo3N/GCOUzVr6a8u2PwNr5A8ahY8xqLDZPfwI2.1SD7ui7q','    ',975424512,'HN',1,'2020-08-26 09:07:01'),(21,'truongbanghia@gmail.com','$2b$10$qGZCt5ex1/.jf4KvGlkiC..AfnBlZuYDCzB2qojP6JH7ufMNuHO1S','    ',975424512,'HN',1,'2020-08-26 09:07:02'),(22,'truongbanghia@gmail.com','$2b$10$M/Q2Q6Vta6kAlzMB7ovpB.Di7eX1ZiHeZY0T8A3hKwqVCO1hQrpRW','     ',975424512,'HN',1,'2020-08-26 09:07:25'),(23,'truongbanghia@gmail.com','$2b$10$WLfc9iIIbUhFCJB4PE5q3Od.xEQZTnrbL9qTCszbfADP/HlmjLBD6','     ',975424512,'HN',1,'2020-08-26 09:07:45'),(24,'truongbanghia@gmail.com','$2b$10$wFrtE2v4XS1c6bJWlhxpF.67OFN41M16TavJMEeTggvc8nwtihcMG','aaa',975424512,'HN',1,'2020-08-26 09:11:18'),(25,'truongbanghia@gmail.com','$2b$10$jDMlx9D2SYa4p0LwRhBjQ.tkJ7cfZVqsvdVNP.SOOPCDhojOMbKuO','dfdsfd',975424512,'HN',1,'2020-08-26 09:11:32'),(26,'truongbanghia@gmail.co','$2b$10$ec7muIBmfyzxh6xGMHNycuOExIp8.Li//1wUJspZhkEFQEqVhw3Zy','ádsads',975424512,'HN',1,'2020-08-26 09:11:55'),(27,'truongbanghia@gmail.co','$2b$10$ovbK4ThMHCL0Vj/1G2TXxu4Bh0lt2bs1lvyu7aD09pQHjBaZg5gSO','truong ba nghia',975424512,'HN',1,'2020-08-26 09:12:36'),(28,'truongbanghia@gmail.co','$2b$10$HjYLgGcwcoHaFBcRXGQZ8.lN4cpM9a09zpiP8mtkcORq5myNms0j.','    nghia',975424512,'HN',1,'2020-08-26 09:12:45'),(29,'truongbanghia@gmail.co','$2b$10$3itOWTBqyeRsssZC7U5YP.aQ1BWOeKiQryqxcf7hVRTjgKpuL5LUa','ádasd',975424512,'HN',1,'2020-08-26 09:13:03'),(30,'truongbanghia@gmail.co','$2b$10$bZUidOyO/tl9Ad3zDMwwUOh//ugdSGAYB4cxNv53JJsMVMWA4jRAq','ádasd',975424512,'HN',1,'2020-08-26 09:21:10'),(31,'truongbanghia@gmail.co','$2b$10$A8b5i8H8wAJkDPuBMBECxuCklPVC9U/XMUEsr4tUPy7cpg.vt5cua','ádasd',975424512,'HN',1,'2020-08-27 01:40:34'),(32,'truongbanghia@gmail.com','$2b$10$XIqmGwWnaeFd.VELe1Av7eOWhYV0Cd1dyKtyuGkdkGzP75Jiw55Py','ádasd',975424512,'HN',1,'2020-08-27 01:42:56'),(33,'truongbanghia@gmail.com','$2b$10$biY95cjvQyhkcHQ5WBZUAeVCgqvXLFB3WNOBTicD2K95RmKWU6BNa','ádasd',975424512,'HN',1,'2020-08-27 02:07:45');
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

-- Dump completed on 2020-08-27 16:54:37
