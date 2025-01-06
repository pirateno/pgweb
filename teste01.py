print("olá, mundo, testando o python")

nome = "Maria"
idade = 25
altura= 1.68
esta_estudando = True
print(nome,idade,altura,esta_estudando)

Nome1 = input("Digite seu nome:")
print("olá", Nome1, "seja bem-vindo")

num1 = float(input("Digite o primeiro numero:"))
num2 = float(input("Digite o segundo numero:"))

soma = num1 + num2
print("A soma é:",soma)

numero = int(input("digite um número: "))

if numero % 2 == 0:
    print("o número é par. ")
else:
    print("o número é ímpar. ") 

    nome2 = input("Qual seu nome?")
    idade1 = int(input("Quantos anos você ten?"))

    print(f"Olá, {nome2}! Você tem {idade1} anos.")

    numero1 = float(input("Digite o primeiro número:"))
    numero2 = float(input("Digite o segundo número:"))

    soma1 = numero1 + numero2
    diferenca = numero1 - numero2
    produto = numero1 * numero2

    print(f"A  soma dos núneros é:{soma1}")
    print(f"A diferença dos números é: {diferenca}")
    print(f"O produto dos números é:{produto}")