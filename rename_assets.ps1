
# Rename directory
if (Test-Path "public/miss tenager") {
    Rename-Item "public/miss tenager" "miss-teenager"
}

# Rename Miss Teenager files
Rename-Item "public/miss-teenager/I am Anvil SalsabilaYour MissTeenager Intellegence West Java 2023-2024sometimes life gave you a .jpg" "miss-teenager-1.jpg" -ErrorAction SilentlyContinue
Rename-Item "public/miss-teenager/I am Anvil SalsabilaYour MissTeenager Intellegence West Java 2023-2024sometimes life gave you a  (1).jpg" "miss-teenager-2.jpg" -ErrorAction SilentlyContinue
Rename-Item "public/miss-teenager/I am Anvil SalsabilaYour MissTeenager Intellegence West Java 2023-2024sometimes life gave you a  (2).jpg" "miss-teenager-3.jpg" -ErrorAction SilentlyContinue

# Rename Duta files
Rename-Item "public/duta/Proud!!!..jpg" "proud.jpg" -ErrorAction SilentlyContinue
Rename-Item "public/duta/Great Memories..jpg" "great-memories-1.jpg" -ErrorAction SilentlyContinue
Rename-Item "public/duta/Great Memories. (1).jpg" "great-memories-2.jpg" -ErrorAction SilentlyContinue

# Rename Inti files
# Using wildcard because the name contains emoji and is very long
Get-ChildItem "public/inti/*me.jpg" | Rename-Item -NewName "inti-1.jpg" -ErrorAction SilentlyContinue
Get-ChildItem "public/inti/*me (1).jpg" | Rename-Item -NewName "inti-2.jpg" -ErrorAction SilentlyContinue
Get-ChildItem "public/inti/*me (2).jpg" | Rename-Item -NewName "inti-3.jpg" -ErrorAction SilentlyContinue

# Rename other files
Rename-Item "public/logo samcon.jpeg" "logo-samcon.jpeg" -ErrorAction SilentlyContinue
Rename-Item "public/logo bkkbn.png" "logo-bkkbn.png" -ErrorAction SilentlyContinue
Rename-Item "public/Desain tanpa judul.png" "desain-tanpa-judul.png" -ErrorAction SilentlyContinue
