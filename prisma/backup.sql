PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
INSERT INTO User VALUES(1,'damian','7a2a24c4f65b9154865dc204a1ddd62cc1966470242e0e672ffbfea0ce776abb10a3b1e547836104e01365d090ffdbbb5e54a4b0f3b9c6e78e6cfa79baef8c5b','XJJK1mh3NppPyinaXfM=',1);
INSERT INTO Function VALUES(1,'register','Rejestracja uzytkownika');
INSERT INTO Function VALUES(2,'login','Logowanie uzytkownika');
INSERT INTO Function VALUES(3,'logout','Wylogowanie uzytkownika');
INSERT INTO Function VALUES(4,'your-passwords','Zwrocenie zapisanych hasel uzytkownika');
INSERT INTO Function VALUES(5,'addPassword','Dodanie nowego hasła do portfela');
INSERT INTO Function VALUES(6,'changePassword','Zmiana zapisanego hasła');
INSERT INTO Function VALUES(7,'decryptPassword','Odszyfrowanie zapisanego hasła');
COMMIT;