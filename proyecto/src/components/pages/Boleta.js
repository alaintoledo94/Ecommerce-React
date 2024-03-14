import React, { useEffect, useState } from 'react';
import { getDocs, collection, query, orderBy, limit } from 'firebase/firestore';
import FirebaseHandler, {db} from '../../config/firebase';


function Boleta() {
    const [userInfo, setUserInfo] = useState(null);
  
    useEffect(() => {
        const fetchLastUser = async () => {
          try {
            const q = query(collection(db, 'usuarios'), orderBy('timestamp', 'desc'), limit(1));
            const querySnapshot = await getDocs(q);
            console.log('Query snapshot:', querySnapshot.docs); 
            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                console.log('Usuario encontrado:', doc.data()); 
                setUserInfo(doc.data());
              });
            }
          } catch (error) {
            console.error('Error al obtener la información del último usuario:', error);
          }
        };
      
        fetchLastUser();
      }, []);
  

  return (
    <div>
      <h1>Detalle de Compra</h1>
      <article>
        <p>
          Gracias  por realizar su pedido en Midnight Store,
          A continuación se adjunta el detalle de su compra:
        </p>
        <div>
          <h2>Información del Último Usuario</h2>
          {userInfo && (
            <ul>
              <li>Nombre: {userInfo.nombre}</li>
              <li>Apellido: {userInfo.apellido}</li>
              <li>Dirección: {userInfo.direccion}</li>
              <li>Email: {userInfo.email}</li>
              {/* Agrega más detalles si es necesario */}
            </ul>
          )}
        </div>
        {/* Agrega más secciones para mostrar otros detalles de la compra si es necesario */}
      </article>
    </div>
  );
}

export default Boleta;
