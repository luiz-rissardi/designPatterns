padrão de projeto "estratégia" padrão de <strong>"projeto comportamental"</strong> 

padrão de projeto que visa o desacoplamento das regras de negocio do comportamento/algoritimo
do siste

diz que temos um contexto de uso aonde pode haver variações no algoritimo 
que será usado, por exemplo um carrinho de compra aonde tme várias promoções.

Criamos uma classe abstrata que engloba o metodo desse algoritimo, temos as classes 
que iram implementar essa interface e iremos aplicar a inversão de dempedencia para injetar a 
classe no contexto do qual será usada 


![alt text](image.png)