import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Car from "./Car.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado com o MONGODB")
    } catch (error) {
        console.log("Erro: ", error);
    }
}

connectDB();

app.post("/Car", async (req, res) => {
    try {
        const novoCarro = await Car.create(req.body);
        res.json(novoCarro);
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.get("/Car", async (req, res) => {
    try {
        const Carros = await Car.find();
        res.json(Carros)
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.put("/Car/:id", async (req, res) => {
    try {
        const CarroAtualizado = await Car.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(CarroAtualizado);
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.delete("/Car/:id", async (req, res) => {
    try {
        const CarDeletado = await Car.findByIdAndDelete(req.params.id);
        res.json(CarDeletado);
    } catch (error) {
        res.json({ error: error.message });
    }
})
app.get("/Car/user/:userId", async (req, res) => {
    try {
        const Carro = await Carro.findById(req.params.id);
        res.json(Carro);
    } catch (error) {
        res.json({ error: error.message })
    }
})
app.get("/Car/car/:carId", async (req, res) => {
    try {
        const Carro = await Carro.findOne({ email: req.params.email });
        res.json(Carro);
    } catch (error) {
        res.json({ error: error.message });
    }
});
app.get("/Car/:id/status", async (req, res) => {
    try {
        const total = await Car.countDocuments();
        res.json({ total });
    } catch (error) {
        res.json({ error: error.message });
    }
});
app.get("/Car/value/:min/:max")

async (req, res) => {
    try {
        const Car = await Car.findOne({ email: req.params.email });
        res.json({ exists: !!Car });
    } catch (error) {
        res.json({ error: error.message });
    }
};
app.patch("/Car/:id", async (req, res) => {
    try {
      const CarroAtualizado = await Car.findByIdAndUpdate(
        req.params.id,
        { nome: req.body.date},
        { new: true }
      );
      res.json(CarroAtualizado);
    } catch (error) {
      res.json({ error: error.message });
    }
});
app.patch("/Car/date/:date", async (req, res) => {
    try {
      const QuantidadeDeCarrosVendidos = await User.findByIdCountDocumentos(
        req.params.id,
        { nome: req.body.nome },
        { new: true }
      );
      res.json(QuantidadeDeCarrosVendidos);
    } catch (error) {
      res.json({ error: error.message });
    }
});
app.post("/users", async (req, res) => {
    try {
        const novoUsuario = await User.create(req.body);
        res.json(novoUsuario);
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.get("/users", async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios)
    } catch (error) {
        res.json({ error: error.message})
    }
})

app.put("/users/:id", async (req, res) => {
    try {
        const usuarioAtualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(usuarioAtualizado);
    } catch (error) {
        res.json({ error: error.message})
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
        res.json(usuarioDeletado);
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        res.json(usuario);
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.get("/users/email/:email", async (req, res) => {
    try {
      const usuario = await User.findOne({ email: req.params.email });
      res.json(usuario);
    } catch (error) {
      res.json({ error: error.message });
    }
});

app.get("/users-count", async (req, res) => {
    try {
      const total = await User.countDocuments();
      res.json({ total });
    } catch (error) {
      res.json({ error: error.message });
    }
});

app.get("/users-exists/:email", async (req, res) => {
    try {
      const usuario = await User.findOne({ email: req.params.email });
      res.json({ exists: !!usuario });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

app.patch("/users/:id/name", async (req, res) => {
    try {
      const usuarioAtualizado = await User.findByIdAndUpdate(
        req.params.id,
        { nome: req.body.nome },
        { new: true }
      );
      res.json(usuarioAtualizado);
    } catch (error) {
      res.json({ error: error.message });
    }
});

app.listen(PORT, () =>
    console.log("O servidor está rodando na porta: ", PORT)
);

// node --watch server.js