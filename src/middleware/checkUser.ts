import { Request, Response, NextFunction } from "express";
import { pool } from "../db/db";

export class authMiddleware {
    static async validateZelId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const zel = req.body.zelid;
            const exists = await authMiddleware.checkIfUserExists(zel);
            console.log(exists);
            
            if (!exists) {
                await pool.query('INSERT INTO user(zelid) VALUES (?)', [zel]);
            }

            next(); // Proceed if user exists or was inserted
        } catch (error) {
            next(error);
        }
    }

    private static async checkIfUserExists(zelid: string): Promise<boolean> {
        const [rows]: any = await pool.query('SELECT * FROM user WHERE zelid = ?', [zelid]);
        
        return Array.isArray(rows) && rows.length > 0;
    }
}
