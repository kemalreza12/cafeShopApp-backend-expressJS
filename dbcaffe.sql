-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2020 at 08:17 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcaffe`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `invoices` varchar(64) NOT NULL,
  `cashier` varchar(32) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `orders` varchar(64) NOT NULL,
  `amount` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `histories`
--

INSERT INTO `histories` (`id`, `invoices`, `cashier`, `date`, `orders`, `amount`) VALUES
(3, '#10928', 'Cashier 1', '2020-10-09 03:13:22', 'ice tea', '120000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` text NOT NULL,
  `price` int(16) NOT NULL,
  `idCategory` int(16) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `idCategory`, `createdAt`, `updateAt`) VALUES
(1, 'kopi Espresso', 'http://localhost:8000/uploads/2020-09-02T01_31_05.018Zjeremy-ricketts-6ZnhM-xBpos-unsplash.png', 10000, 1, '2020-09-07 23:48:44', '2020-09-07 23:48:44'),
(2, 'Coffe Latte', 'http://localhost:8000/uploads/2020-09-02T01_31_35.711Zbear.png', 15000, 1, '2020-10-02 21:08:09', '2020-10-02 21:08:09'),
(32, 'Chiken Katsu', 'http://localhost:8000/uploads/2020-09-09T08_09_28.930Zchickenkatsu.png', 20000, 2, '2020-09-09 10:14:31', '2020-09-09 10:14:31'),
(33, 'Wiener', 'http://localhost:8000/uploads/2020-09-09T08_10_11.837Zwiener.png', 25000, 2, '2020-09-09 08:10:11', '2020-09-09 08:10:11'),
(34, 'Black Forest', 'http://localhost:8000/uploads/2020-09-09T08_10_48.004Zblackforest.png', 30000, 2, '2020-09-09 08:10:48', '2020-09-09 08:10:48'),
(35, 'Choco Rhum', 'http://localhost:8000/uploads/2020-09-09T08_11_18.646Zchocorum.png', 35000, 2, '2020-10-07 23:17:29', '2020-10-07 23:17:29'),
(39, 'ref', 'http://localhost:8000/uploads/2020-10-06T02_29_19.738Z548449fe70f5b6c24176150760ca8a8a.jpg', 123, 1, '2020-10-06 02:29:19', '2020-10-06 02:29:19'),
(41, 'coffe', 'http://localhost:8000/uploads/2020-10-08T00_23_27.539Zbear.png', 25000, 1, '2020-10-08 00:23:27', '2020-10-08 00:23:27'),
(42, 'wiener', 'http://localhost:8000/uploads/2020-10-09T06_42_26.933Zwiener.png', 40000, 1, '2020-10-09 06:42:27', '2020-10-09 06:42:27'),
(44, 'Red Velvet', 'http://localhost:8000/uploads/2020-10-09T06_51_53.015Zredvelvet.png', 25000, 1, '2020-10-09 06:51:53', '2020-10-09 06:51:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `roleId` int(11) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `roleId`, `firstName`, `lastName`, `createdAt`, `updatedAt`) VALUES
(1, 'kemalr@gmail.com', '$2a$10$jZ0Ew.BG6rBPQXP7YO8WlOTB/h0vLb8M2uXyktNLvvM8yL3CQvbiO', 2, 'kemal', 'reza', '2020-08-23 10:32:00', '2020-08-23 10:32:00'),
(2, 'kemalreza@gmail.com', '$2a$10$8lKzJ0R6z6UW/j2LfuLinuUe7vKzvGcmWGQJ.Dwa/rAOcUmAvgMV.', 2, 'kemal', 'reza', '2020-08-24 03:50:14', '2020-08-24 03:50:14'),
(3, 'kreza@gmail.com', '$2a$10$.8pQX/J0uwNm1eJ7OI9jq.N6h64YR6PJznPFX3oZ2AVa/8UaX.Etq', 2, 'kemal', 'reza', '2020-08-24 07:23:20', '2020-08-24 07:23:20'),
(6, 'check@gmail.com', '$2a$10$onIdWDjKE.YhJfyOVpiTVeenFD2JXgOZNxiw4iRU.NTAkCZgGZpNq', 2, 'misa', 'misa', '2020-09-08 04:36:25', '2020-09-08 04:36:25'),
(9, 'example@gmail.com', '$2a$10$O4gqmO33ZEW2LlkqHgnW7OpVJIrlBx.KEsZF7Egdv3V7IJkhsk8bi', 2, 'da', 'dada', '2020-09-09 07:57:41', '2020-09-09 07:57:41'),
(11, 'm.kurisu@channel.com', '$2a$10$KWEOP2D7ilsxKDFFmiWGiubZG1aTDAZUKclbPvcfScMSblzNy5H0m', 2, 'Makise', 'Kurisu', '2020-09-09 10:04:31', '2020-09-09 10:04:31'),
(13, 'example2@gmail.com', '$2a$10$vGKLZUjso/X4xsNP7SqdbeGOq2TzF.S4qyjoUAE7zRErm0CN3Bl/u', 2, 'kjl', 'r', '2020-09-24 07:47:35', '2020-09-24 07:47:35'),
(14, 'okarin@gmail.com', '$2a$10$YoTxMj5NtZkZVYZ.e3aQiuoNig5E2tQtiZ588SJkL8kUnv46fV8JG', 2, 'okabe', 'rintarou', '2020-10-02 21:05:35', '2020-10-02 21:05:35'),
(17, 'example@gmail.coms', '$2a$10$m/zvNfmxCvkq2EMW.EO5peI1KvilNXG0yHePp1XFABoFQ2xul6Qru', 2, 're', 'as', '2020-10-05 23:33:57', '2020-10-05 23:33:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
