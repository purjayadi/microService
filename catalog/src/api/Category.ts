import { Request, Response } from 'express';
import { ICategory, IPaginate } from '../dto';
import { CategoryService } from '../services';

export = (app:any) => {
  const service = new CategoryService();

  app.get('/catalog/category', async (req: Request, res: Response) => {
    const payload: IPaginate = req.query;
    try {
      const data = await service.GetCategory(payload);
      return res.status(200).send({
        success: true,
        data: data
      });
    } catch (err:any) {
      return res.status(500).send({
        success: false,
        message: err.message
      });
    }
  });

  app.post('/catalog/category/create', async (req: Request, res: Response) => {
      const category:ICategory = req.body;
      try {
        const data = await service.CreateCategory(category);
        return res.status(200).send({
            success: true,
            data: data
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.patch('/catalog/category/edit/:id', async (req: Request, res: Response) => {
      const category:ICategory = req.body;
      try {
        await service.UpdateCategory(req.params.id, category);
        return res.status(200).send({
            success: true,
            message: 'Update category successfully'
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.delete('category/delete/:id', async (req: Request, res: Response) => {
    try {
        await service.DeleteCategory(req.params.id);
        return res.status(201).send({
            success: true,
            message: 'Delete category successfully'
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });

  app.get('/catalog/category/:id', async (req: Request, res: Response) => {
    try {
        const data = await service.GetCategoryById(req.params.id);
        return res.status(200).send({
            success: true,
            data: data
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });
}