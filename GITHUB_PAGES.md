# Instruções Específicas para GitHub Pages

## 🚀 Guia Passo a Passo Completo

### 1. Preparação dos Arquivos
Certifique-se de que todos os arquivos estão organizados conforme a estrutura:

```
livro_digital_rodin/
├── index.html                 # Página principal
├── README.md                  # Documentação
├── GITHUB_PAGES.md           # Este arquivo
├── css/
│   ├── style.css             # Estilos principais
│   ├── gallery.css           # Estilos da galeria
│   └── timeline.css          # Estilos da timeline
├── js/
│   └── main.js               # JavaScript principal
├── images/
│   ├── rodin/                # Imagens das esculturas de Rodin
│   ├── michelangelo/         # Imagens de Michelangelo
│   └── donatello/            # Imagens de Donatello
└── pages/
    └── recursos.html         # Página de recursos pedagógicos
```

### 2. Criando o Repositório no GitHub

#### Opção A: Interface Web (Recomendado para iniciantes)
1. **Acesse GitHub.com** e faça login
2. **Clique em "New"** (botão verde) ou no ícone "+"
3. **Configure o repositório:**
   - Repository name: `livro-digital-rodin`
   - Description: `Livro digital interativo sobre o corpo masculino na obra de Rodin`
   - Visibilidade: **Public** (obrigatório para GitHub Pages gratuito)
   - ✅ Add a README file
   - ✅ Add .gitignore (escolha "Node" se disponível)
4. **Clique em "Create repository"**

#### Opção B: Linha de Comando (Para usuários avançados)
```bash
# No terminal, dentro da pasta livro_digital_rodin/
git init
git add .
git commit -m "Adicionar livro digital interativo sobre Rodin"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/livro-digital-rodin.git
git push -u origin main
```

### 3. Upload dos Arquivos

#### Método 1: Drag & Drop (Mais fácil)
1. **Na página do repositório**, clique em "uploading an existing file"
2. **Arraste TODOS os arquivos** da pasta `livro_digital_rodin/` para a área de upload
3. **Aguarde o upload** de todas as imagens e arquivos
4. **Adicione uma mensagem:** "Adicionar livro digital completo"
5. **Clique em "Commit changes"**

#### Método 2: Git Desktop (Interface gráfica)
1. **Baixe GitHub Desktop** em desktop.github.com
2. **Clone o repositório** criado
3. **Copie todos os arquivos** para a pasta local
4. **Commit e push** através da interface

### 4. Configurando GitHub Pages

1. **No repositório**, clique na aba "Settings"
2. **Role para baixo** até encontrar "Pages" no menu lateral esquerdo
3. **Configure as opções:**
   - Source: "Deploy from a branch"
   - Branch: "main" (ou "master" se for o caso)
   - Folder: "/ (root)"
4. **Clique em "Save"**
5. **Aguarde a mensagem de confirmação** (pode levar alguns minutos)

### 5. Verificando o Deploy

#### Indicadores de Sucesso:
- ✅ Aparece um link verde: `https://SEU_USUARIO.github.io/livro-digital-rodin`
- ✅ Na aba "Actions" aparecem builds com ✅ (check verde)
- ✅ O site carrega corretamente no navegador

#### Se houver problemas:
- ❌ **Erro 404:** Verifique se o arquivo `index.html` está na raiz
- ❌ **Imagens não carregam:** Verifique os caminhos relativos
- ❌ **CSS não aplica:** Verifique os links no HTML

### 6. Testando o Site

Acesse o link fornecido pelo GitHub Pages e teste:

1. **Navegação principal** - Todos os links funcionam?
2. **Galeria interativa** - Os modais abrem corretamente?
3. **Página de recursos** - O glossário expande?
4. **Responsividade** - Funciona no celular?
5. **Imagens** - Todas carregam corretamente?

### 7. Atualizações Futuras

Para fazer alterações:
1. **Edite os arquivos** localmente ou direto no GitHub
2. **Faça commit** das mudanças
3. **O GitHub Pages atualiza automaticamente** em alguns minutos

### 8. Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio:
1. **Compre um domínio** (ex: rodin-digital.com)
2. **Configure DNS** apontando para GitHub Pages
3. **Adicione o domínio** nas configurações do repositório
4. **Ative HTTPS** (recomendado)

## 🔧 Solução de Problemas Comuns

### Problema: Site não carrega
**Solução:**
- Verifique se o repositório é público
- Confirme que o arquivo `index.html` está na raiz
- Aguarde até 10 minutos para o primeiro deploy

### Problema: Imagens não aparecem
**Solução:**
- Verifique se as pastas `images/` foram enviadas
- Confirme que os caminhos no HTML estão corretos
- Teste localmente primeiro

### Problema: CSS não funciona
**Solução:**
- Verifique os links `<link rel="stylesheet">` no HTML
- Confirme que os arquivos CSS foram enviados
- Teste no navegador com F12 (Developer Tools)

### Problema: JavaScript não funciona
**Solução:**
- Abra F12 e verifique o Console por erros
- Confirme que o arquivo `js/main.js` foi enviado
- Verifique se há erros de sintaxe

## 📱 Otimizações Recomendadas

### Para Melhor Performance:
1. **Comprima as imagens** antes do upload
2. **Minifique CSS/JS** se necessário
3. **Use CDN** para bibliotecas externas
4. **Ative cache** do navegador

### Para Melhor SEO:
1. **Adicione meta tags** específicas
2. **Use títulos descritivos** nas páginas
3. **Inclua alt text** em todas as imagens
4. **Crie sitemap.xml** se necessário

## 🎓 Uso Educacional

### Para Professores:
- **Compartilhe o link** com os alunos
- **Integre nas aulas** de arte/história
- **Use as atividades** como avaliação
- **Adapte o conteúdo** conforme necessário

### Para Alunos:
- **Explore interativamente** as esculturas
- **Complete as atividades** pedagógicas
- **Reflita criticamente** sobre as obras
- **Compartilhe suas descobertas**

## 📞 Suporte Técnico

### Recursos Úteis:
- **Documentação GitHub Pages:** https://pages.github.com/
- **Guias GitHub:** https://guides.github.com/
- **Comunidade GitHub:** https://github.community/
- **Stack Overflow:** Para problemas específicos

### Contato:
Para dúvidas específicas sobre este projeto, consulte:
- A documentação no README.md
- Os comentários no código
- A instituição de ensino responsável

---

**Importante:** Mantenha sempre uma cópia local dos arquivos como backup!

