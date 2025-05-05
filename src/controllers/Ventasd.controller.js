// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
    try {
      const [result] = await pool.query(`
        SELECT 
          v.id_venta,
          v.fecha_venta,
          CONCAT(e.primer_nombre, ' ', e.primer_apellido) AS nombre_empleado,
          CONCAT(c.primer_nombre, ' ', c.primer_apellido) AS nombre_cliente,
          v.total_venta
        FROM Ventas v
        INNER JOIN Clientes c ON v.id_cliente = c.id_cliente
        INNER JOIN Empleados e ON v.id_empleado = e.id_empleado
      `);
      
      res.json(result);
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al leer los datos de las ventas.',
        error: error
      });
    }
  };