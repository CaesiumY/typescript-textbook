# <O'REILLY> π¦νμμ€ν¬λ¦½νΈ νλ‘κ·Έλλ°

<image src="./screenshots/XL.jpg" width="400" />

# πλͺ©μ°¨

1. μκ°
2. [νμμ€ν¬λ¦½νΈ: 3000λ―Έν° μκ³΅μμ λ΄λ €λ€λ³΄κΈ°](./src/chapter2)
3. [νμμ λͺ¨λ  κ²](./src/chapter3)
4. [ν¨μ](./src/chapter4)
5. [ν΄λμ€μ μΈν°νμ΄μ€](./src/chapter5)
6. [κ³ κΈ νμ](./src/chapter6)
7. [μλ¬ μ²λ¦¬](./src/chapter7)
8. [λΉλκΈ° νλ‘κ·Έλλ°, λμμ±κ³Ό λ³λ ¬μ±](./src/chapter8)
9. [νλ‘ νΈμλ νλ μμν¬μ λ°±μλ νλ μμν¬](./src/chapter9)
10. [Namespaces, Modules](./src/chapter10)
11. [μλ°μ€ν¬λ¦½νΈμ μνΈ λμ](./src/chapter11)
12. [νμμ€ν¬λ¦½νΈ λΉλ λ° μ€ν](./src/chapter12)
13. [κ²°λ‘ ](./src/chapter13)

# πκ³΅λΆνκΈ°

κ·Όλ¬΄νλ©° μ± μ½κ³ , μ°μ΅ λ¬Έμ μ μ€μ΅μ κ΄ν κ²λ€μ μ λ¦¬ν  μμ 

# π¨κΈ°λ³Έ μν

## κ° μ±ν° μμ μ 

```bash
npm init

npm install -D typescript eslint @types/node

tsc --init
```

## ν΄λ κ΅¬μ±

```
βββββnode_modules/
βββββsrc/
β βββββchapter[:id]
β       βββββindex.ts
βββββpackage.json
βββββtsconfig.json
βββββ.eslint.json
```

## `tsconfig.json`, `eslint.json` μ€μ 

1. `tsc --init` μΌλ‘ κΈ°λ³Έ μμ±ν ν

2. ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "lib": ["ES2015"],
       "sourceMap": true,
       "outDir": "./dist",
       "strict": true
     },
     "include": ["src"]
   }
   ```

3. `eslint --init` μΌλ‘ μλ μ€μ 

## μ€ν λͺλ Ήμ΄

`npx tsc νμΌ κ²½λ‘` μ΄ν `node dist/index.js`

## λ€λ₯Έ λ°©λ²

- [`ts-node`](https://github.com/TypeStrong/ts-node) - λͺλ Ή ν λ²μΌλ‘ μ»΄νμΌ λ° μ€ν
- [`typescript-node-starter`](https://github.com/microsoft/TypeScript-Node-Starter) - μ€μΊν΄λ©
