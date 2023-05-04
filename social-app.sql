CREATE SCHEMA `social` ;

CREATE TABLE `social`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `coverPic` VARCHAR(300) NULL,
  `profilePic` VARCHAR(300) NULL,
  `city` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
  
CREATE TABLE `social`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(200) NULL,
  `img` VARCHAR(200) NULL,
  `userid` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `userid`
    FOREIGN KEY (`userid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
ALTER TABLE `social`.`posts` 
ADD COLUMN `createdAt` DATETIME NULL AFTER `userid`;

CREATE TABLE `social`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(200) NOT NULL,
  `createdAt` DATETIME NULL,
  `userid` INT NOT NULL,
  `postid` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `postid_idx` (`postid` ASC) VISIBLE,
  CONSTRAINT `commentUserid`
    FOREIGN KEY (`userid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `commentPostid`
    FOREIGN KEY (`postid`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `social`.`stories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(200) NOT NULL,
  `userid` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `storyUserid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `storyUserid`
    FOREIGN KEY (`userid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `social`.`relationships` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `followerUserid` INT NOT NULL,
  `followedUserid` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `followerUser_idx` (`followerUserid` ASC) VISIBLE,
  INDEX `followedUser_idx` (`followedUserid` ASC) VISIBLE,
  CONSTRAINT `followerUser`
    FOREIGN KEY (`followerUserid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `followedUser`
    FOREIGN KEY (`followedUserid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `social`.`likes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `postid` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `likePostUserid_idx` (`userid` ASC) VISIBLE,
  INDEX `likePostPostid_idx` (`postid` ASC) VISIBLE,
  CONSTRAINT `likePostUserid`
    FOREIGN KEY (`userid`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `likePostPostid`
    FOREIGN KEY (`postid`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

INSERT INTO `social`.`posts` (`id`, `desc`, `userid`) VALUES ('1', 'test1', '1');
INSERT INTO `social`.`posts` (`id`, `desc`, `userid`) VALUES ('2', 'test2', '2');
